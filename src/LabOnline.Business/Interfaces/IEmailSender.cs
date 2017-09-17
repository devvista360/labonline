using LabOnline.Business.Domain;
using MimeKit;
using System.Threading.Tasks;

namespace LabOnline.Business.Interfaces
{
    /// <summary>
    /// Interface to all email senders
    /// </summary>
    public interface IEmailSender
    {
        /// <summary>
        /// Send the email
        /// </summary>
        Task<string> Send(EmailMessage message, BodyBuilder builder = null);
    }
}
