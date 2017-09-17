using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using LabOnline.Business.Services;
using LabOnline.Business.Data;
using Microsoft.EntityFrameworkCore;
using LabOnline.Business.Interfaces;
using LabOnline.Business.Domain;
using LabOnline.UI.Filters;
using LabOnline.Business.Jobs;
using System.Collections.Generic;
using Serilog;
using System.IO;
using MR.AspNetCore.Jobs;
using LabOnline.UI.Services;

namespace LabOnline.UI
{
    public class Startup
    {
        private string _connectionString;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            ConfigureLogs(ConfigureAppPaths(env));
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder =>
                    {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

            AddDatabaseConnections(services);
            AddServiceDependencies(services);
            AddJobServices(services);
            services.AddMvc();
        }

        private void AddJobServices(IServiceCollection services)
        {
            // Registers Jobs with an sql server adapter
            services.AddJobs(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
                options.UseCronJobRegistry<AgentCronJobRegistry>();
                options.PollingDelay = 10;
            });
        }

        /// <summary>
        /// Configure application paths and validate it
        /// </summary>
        /// <param name="env"></param>
        /// <returns></returns>
        private static Dictionary<string, string> ConfigureAppPaths(IHostingEnvironment env)
        {
            var appPaths = new Dictionary<string, string>()
            {
                { "emails", Path.Combine(env.WebRootPath, "assets") },
                { "serilog", Path.Combine(env.WebRootPath, "Logs") }
            };

            appPaths.AsQueryable().ForEachAsync(item =>
            {
                if (!Directory.Exists(item.Value))
                {
                    Directory.CreateDirectory(item.Value);
                }
            });

            return appPaths;
        }

        /// <summary>
        /// Configure logs
        /// </summary>
        /// <param name="appPaths">Application paths</param>
        private static void ConfigureLogs(Dictionary<string, string> appPaths)
        {
            // Configure the Serilog pipeline
            Log.Logger = new LoggerConfiguration()
                        .MinimumLevel.Debug()
                        .Enrich.FromLogContext()
                        .WriteTo.RollingFile(
                            pathFormat: Path.Combine(appPaths["serilog"], "log-{Date}.txt"),
                            outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} {SourceContext} [{Level}] {Message}{NewLine}{Exception}",
                            restrictedToMinimumLevel: Serilog.Events.LogEventLevel.Error)
                        .CreateLogger();
        }

        private void AddDatabaseConnections(IServiceCollection services)
        {
            _connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<LabDbContext>(options => options.UseSqlServer(_connectionString));
        }

        private void AddServiceDependencies(IServiceCollection services)
        {
            services.AddScoped<ServiceExceptionFilterAttribute>();

            services.AddOptions();
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));

            services.AddSingleton(provider => Configuration);

            services.AddTransient<IExamService, ExamService>();
            services.AddTransient<ILabEmailService, LabEmailService>();

            services.AddSingleton<IJobEmailService, JobEmailService>();
            services.AddSingleton<ApplicationJobService>();

            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IAuditUserService, AuditService>();
            services.AddSingleton<ICryptoService>(new CryptoService(SecurityConstants.SecurityKey));

            services.AddScoped<HtmlRemovalService, HtmlRemovalService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( 
            IApplicationBuilder app, 
            IHostingEnvironment env, 
            ILoggerFactory loggerFactory,
            IServiceProvider serviceProvider)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var angularRoutes = new[] {
                 "/home",
                 "/about"
             };

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.HasValue && null != angularRoutes.FirstOrDefault(
                    (ar) => context.Request.Path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase)))
                {
                    context.Request.Path = new PathString("/");
                }

                await next();
            });

            app.UseCors("AllowAllOrigins");

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            ApplicationJobService.ConnectionString = _connectionString;
            app.UseJobs();
            TokenProviderService.Configure(app);
        }
    }
}
