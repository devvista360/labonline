using LabOnline.Business.Data;
using LabOnline.Business.Domain;
using LabOnline.Business.Interfaces;
using LabOnline.Business.Resources;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace LabOnline.Business.Jobs
{
    /// <summary>
    /// Manager to send email confirmation
    /// </summary>
    public class JobEmailService : IJobEmailService
    {
        private readonly IAuditUserService _auditService;
        private readonly IConfiguration _configuration;
        private readonly ILogger<JobEmailService> _logger;
        private readonly ILabEmailService _emailService;
        private readonly ICryptoService _cryptoService;

        public string ConnectionString { get; set; }

        public JobEmailService(
            IAuditUserService auditService, 
            ILogger<JobEmailService> logger, 
            ILabEmailService emailService, 
            ICryptoService cryptoService)
        {
            _auditService = auditService;
            _logger = logger;
            _emailService = emailService;
            _cryptoService = cryptoService;
        }

        /// <summary>
        /// Execute the job process
        /// </summary>
        public void Execute()
        {
            try
            {
                var defaultIp = GetIpAddress();

                var optionsBuilder = new DbContextOptionsBuilder<LabDbContext>();
                optionsBuilder.UseSqlServer(ConnectionString);

                using (var context = new LabDbContext(optionsBuilder.Options))
                {
                    var welcomeUsers = context
                        .Users.AsNoTracking()
                        .Where(u => !u.IsConfirmed.HasValue && u.IsActive).ToList();

                    foreach (var user in welcomeUsers)
                    {
                        var log = user.CreateAudit(MessageTexts.Welcome, idAddress: defaultIp);

                        try
                        {
                            user.Password = user.CreatePassword();
                            _emailService.SendEmail(user, "welcome.html", true);

                            user.Password = _cryptoService.Encrypt(user.Password);
                            user.IsConfirmed = true;
                            user.LastActivity = DateTime.Now;
                            log.Content = MessageTexts.Success;

                            context.Users.Update(user);
                            context.UserOperations.Add(log);
                        }
                        catch (Exception ex)
                        {
                            user.IsConfirmed = null;
                            log.Content = ex.GetBaseException().Message;
                            context.UserOperations.Add(log);
                        }
                        finally
                        {
                            context.SaveChanges();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"{ex.GetBaseException().Message}");
            }
        }

        private string GetIpAddress()
        {
            var hostName = Dns.GetHostName();
            var ipHostInfo = Dns.GetHostEntryAsync(hostName).Result;

            for (var index = 0; index < ipHostInfo.AddressList.Length; ++index)
            {
                if (ipHostInfo.AddressList[index].AddressFamily == AddressFamily.InterNetwork)
                {
                    return ipHostInfo.AddressList[index].ToString();
                }
            }

            return string.Empty;
        }
    }
}