using LabOnline.Business.Domain;
using LabOnline.Business.Interfaces;
using LabOnline.Business.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace LabOnline.Business.Services
{
    public class LabEmailService: EmailService, ILabEmailService
    {
        private readonly AppSettings _appSettings;
        private readonly HtmlRemovalService _htmlRemoval;

        public LabEmailService(IOptions<AppSettings> config, IHostingEnvironment appEnvironment, HtmlRemovalService htmlRemoval)
        {
            _appSettings = config.Value;
            _appSettings.EmailsTemplatePath = Path.Combine(appEnvironment.WebRootPath, "assets");
            _htmlRemoval = htmlRemoval;
        }

        /// <summary>
        /// Send email
        /// </summary>
        /// <param name="user"></param>
        /// <param name="emailFileTemplate"></param>
        /// <param name="isWelcome"></param>
        public async void SendEmail(User user, string emailFileTemplate, bool isWelcome)
        {
            var emailSubject = isWelcome ? _appSettings.EmailSubjectAccounCreation : _appSettings.EmailSubjectResetPassword;

            emailSubject += $" {user.IdType}-{user.UserId}";

            var message = BuildContent(user, emailFileTemplate, emailSubject);
            await Send(message.Key, message.Value);
        }

        /// <summary>
        /// Build email content
        /// </summary>
        /// <param name="user"></param>
        private KeyValuePair<EmailMessage, BodyBuilder> BuildContent(User user, string emailFileTemplate, string emailSubject)
        {
            var fileTemplate = Path.Combine(_appSettings.EmailsTemplatePath, emailFileTemplate);

            if (!File.Exists(fileTemplate))
            {
                throw new ArgumentException($"El archivo {fileTemplate} no existe.");
            }

            var htmlContent = File.ReadAllText(fileTemplate);
            var logoFile = _appSettings.EmailLogoSignature;
            var logoPath = Path.Combine(_appSettings.EmailsTemplatePath, _appSettings.EmailLogoSignature);
            var emailCopies = _appSettings.EmailsToCopy.Split(',').ToList();

            new Dictionary<string, string>()
            {
                { "@imglogo", logoFile },
                { "@fullname", $"{user.FirstName} {user.LastName}".ToUpper() },
                { "@appsiteurl", _appSettings.AppSiteUrl },
                { "@userid", user.Id.ToString().Replace("-", "") },
                { "@documenttype", user.IdType },
                { "@documentid", user.UserId },
                { "@usertype", user.GetProfileName() },
                { "@password", user.Password }
            }
            .ToList().ForEach(item => htmlContent = htmlContent.Replace(item.Key, item.Value));

            var message = new EmailMessage
            {
                SmtpOutServer = _appSettings.SmtpOutServer,
                SmtpDomainServer = _appSettings.SmtpDomainServer,
                SmtpOutPort = _appSettings.SmtpOutPort,
                SmtpAccountUsername = _appSettings.SmtpAccountUsername,
                SmtpAccountPassword = _appSettings.SmtpAccountPassword,
                Subject = emailSubject,
                IsHtmlBody = true,
                SmtpRequiresAuthentication = true
            };

            message.From.Add(_appSettings.SmtpAccountUsernameAlias, _appSettings.SmtpAccountUsername);
            message.To.Add($"{user.FirstName} {user.LastName}", user.Email);

            emailCopies.ForEach(toCopy => message.To.Add(toCopy, toCopy));

            var builder = new BodyBuilder();

            builder.TextBody = _htmlRemoval.RemoveHtmlTagsCharArray(htmlContent);
            builder.HtmlBody = htmlContent;
            builder.LinkedResources.Add(logoPath);

            return new KeyValuePair<EmailMessage, BodyBuilder>(message, builder);
        }
    }
}