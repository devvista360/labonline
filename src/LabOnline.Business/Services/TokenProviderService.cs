using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using LabOnline.Business.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using LabOnline.Business.Models;
using System.Net;
using LabOnline.Business.Domain;
using Microsoft.AspNetCore.Builder;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace LabOnline.Business.Services
{
    /// <summary>
    /// Provider JWT token
    /// </summary>
    /// <example>https://stormpath.com/blog/token-authentication-asp-net-core</example>
    public class TokenProviderService
    {
        private readonly RequestDelegate _next;
        private readonly TokenProviderOptions _options;
        private readonly IAccountService _accountService;

        public TokenProviderService(RequestDelegate next, IOptions<TokenProviderOptions> options, IServiceProvider serviceProvider)
        {
            _next = next;
            _options = options.Value;
            _accountService = serviceProvider.GetService<IAccountService>();
        }

        public static void Configure(IApplicationBuilder app)
        {
            // Add JWT generation endpoint:
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecurityConstants.SecretKey));

            var options = new TokenProviderOptions
            {
                Audience = "LabAudience",
                Issuer = "LabIssuer",
                SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256),
            };

            app.UseMiddleware<TokenProviderService>(Options.Create(options));
        }        

        public Task Invoke(HttpContext context)
        {
            // If the request path doesn't match, skip
            if (!context.Request.Path.Equals(_options.Path, StringComparison.Ordinal))
            {
                return _next(context);
            }

            // Request must be POST with Content-Type: application/x-www-form-urlencoded
            if (!context.Request.Method.Equals("POST") || !context.Request.HasFormContentType)
            {
                context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return context.Response.WriteAsync("Bad request.");
            }

            return GenerateToken(context);
        }

        /// <summary>
        /// Get the token for the request
        /// </summary>
        /// <example>https://en.wikipedia.org/wiki/List_of_HTTP_status_codes</example>
        /// <param name="context"></param>
        /// <returns></returns>
        private async Task GenerateToken(HttpContext context)
        {
            var username = context.Request.Form["username"];
            var password = context.Request.Form["password"];
            var remoteIp = context.Connection.RemoteIpAddress.ToString();
            var userAgent = new StringBuilder();
            User registerUser;
            string userAgentHeader = string.Empty;

            try
            {
                userAgentHeader = context.Request.Headers["User-Agent"].ToString();
                UserAgent.UserAgent ua = new UserAgent.UserAgent(userAgentHeader);
                userAgent.Append($"{ua.OS.Name} {ua.OS.Version}/{ua.Browser.Name} {ua.Browser.Version}");
            }
            catch
            {
                userAgent.Append(userAgentHeader);
            }

            var identity = await GetIdentity(username, password, remoteIp, out registerUser, userAgent.ToString());
            if (identity == null)
            {
                context.Response.StatusCode = (int)HttpStatusCode.Forbidden;
                await context.Response.WriteAsync("Usuario o contraseña incorrecto.");
                return;
            }

            var now = DateTime.UtcNow;

            // Specifically add the jti (random nonce), iat (issued timestamp), and sub (subject/user) claims.
            // You can add other claims here, if you want:
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, now.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)
            };

            // Create the JWT and write it to a string
            var jwt = new JwtSecurityToken(
                issuer: _options.Issuer,
                audience: _options.Audience,
                claims: claims,
                notBefore: now,
                expires: now.Add(_options.Expiration),
                signingCredentials: _options.SigningCredentials);
            var jwtAccessToken = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                AccessToken = jwtAccessToken,
                UserId = registerUser.Id,
                UserName = $"{registerUser.UserType}-{registerUser.IdType}-{registerUser.UserId}",
                FullName = $"{registerUser.FirstName} {registerUser.LastName}",
                ExpiresIn = (int)_options.Expiration.TotalSeconds
            };

            // Serialize and return the response
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
        }

        private Task<ClaimsIdentity> GetIdentity(string username, string password, string remoteIp, out User foundUser, string userAgent)
        {
            var fragments = username.Split(new[] { '-' }, StringSplitOptions.RemoveEmptyEntries);
            var user = new User
            {
                UserId = fragments.Length == 3 ? fragments[2].ToUpper() : string.Empty,
                IdType = fragments.Length == 3 ? fragments[1] : string.Empty,
                UserType = fragments.Length == 3 ? fragments[0] : string.Empty,
                Password = password ?? string.Empty
            };

            foundUser = _accountService.Login(user, remoteIp, userAgent);

            if (foundUser != null)
            {
                return Task.FromResult(new ClaimsIdentity(
                        new System.Security.Principal.GenericIdentity(username, "Token"), new Claim[] { }));
            }

            // Credentials are invalid, or account doesn't exist
            return Task.FromResult<ClaimsIdentity>(null);
        }
    }
}
