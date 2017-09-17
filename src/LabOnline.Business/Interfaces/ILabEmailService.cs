using LabOnline.Business.Models;

namespace LabOnline.Business.Interfaces
{
    public interface ILabEmailService: IEmailSender
    {
        void SendEmail(User user, string emailFileTemplate, bool isWelcome);
    }
}
