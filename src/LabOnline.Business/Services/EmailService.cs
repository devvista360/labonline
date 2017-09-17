using LabOnline.Business.Interfaces;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using LabOnline.Business.Domain;
using System.Threading.Tasks;
using System;
using LabOnline.Business.Resources;

namespace LabOnline.Business.Services
{
    /// <summary>
    /// Concrete implementation for ASP.NET Core 1.0
    /// </summary>
    /// <example>
    /// https://github.com/jstedfast/MimeKit/blob/master/component/GettingStarted.md
    /// http://www.mimekit.net/docs/html/CreatingMessages.htm
    /// </example>
    public class EmailService : IEmailSender
    {
        /// <summary>
        /// Send and email
        /// </summary>
        public async Task<string> Send(EmailMessage infoMessage, BodyBuilder builder)
        {
            var result = string.Empty;

            try
            {
                var message = new MimeMessage() { Subject = infoMessage.Subject };

                infoMessage.From.ForEach(from => message.From.Add(new MailboxAddress(from.Key, from.Value)));
                infoMessage.To.ForEach(to => message.To.Add(new MailboxAddress(to.Key, to.Value)));
                message.Body = builder.ToMessageBody();

                using (var smtpClient = new SmtpClient())
                {
                    var settings = (SecureSocketOptions)infoMessage.SecureSocketOptions;

                    smtpClient.LocalDomain = infoMessage.SmtpDomainServer;
                    await smtpClient.ConnectAsync(infoMessage.SmtpOutServer, infoMessage.SmtpOutPort ?? 0, settings)
                        .ConfigureAwait(false);

                    if (infoMessage.SmtpRequiresAuthentication)
                    {
                        smtpClient.Authenticate(infoMessage.SmtpAccountUsername, infoMessage.SmtpAccountPassword);
                    }

                    await smtpClient.SendAsync(message).ConfigureAwait(false);
                    await smtpClient.DisconnectAsync(true).ConfigureAwait(false);
                }

                result = MessageTexts.Success;
            }
            catch (Exception ex)
            {
                result = $"Error al enviar el correo: {ex.Message}";
            }
            return result;
        }
    }
}