using LabOnline.Business.Dtos;
using LabOnline.Business.Models;
using LabOnline.Database.Dtos;
using System;
using System.Collections.Generic;
using System.Net;

namespace LabOnline.Business.Interfaces
{
    public interface IAccountService
    {
        HttpStatusCode ConfirmEmail(string userId, string remoteIp);
        HttpStatusCode ForgotPassword(string email, string remoteIp);
        HttpStatusCode ResetPassword(AccountDto item);
        HttpStatusCode ChangePassword(AccountDto item);
        User Login(User user, string remoteIp, string userAgent);
        void Remove(PersonDto person);
        Guid Add(PersonDto person);
        void Update(PersonDto person);
        HttpStatusCode Exists(string id);
        User Get<T>(T id);
        User Get(string documentId, string documentType, string userType, bool useNoTracking = false);
        IEnumerable<User> Find(string filter);
        int GetRowCount();
        void AuditPdf(string userId, Guid updatedBy, string content, string remoteIp);
    }
}
