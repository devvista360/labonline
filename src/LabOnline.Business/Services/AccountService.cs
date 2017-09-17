using LabOnline.Business.Domain;
using LabOnline.Business.Dtos;
using LabOnline.Business.Interfaces;
using LabOnline.Business.Models;
using LabOnline.Database.Dtos;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using System.Text;
using LabOnline.Business.Resources;

namespace LabOnline.Business.Services
{
    /// <summary>
    /// Account user services
    /// </summary>
    public class AccountService: IAccountService
    {
        private readonly IRepository<User> _repository;
        private readonly ICryptoService _cryptoService;
        private readonly IAuditUserService _auditService;
        private readonly ILogger _logger;
        private readonly ILabEmailService _emailService;        

        public AccountService(IRepository<User> userRepository, ICryptoService cryptoService, 
            IAuditUserService auditService, ILogger<AccountService> logger, ILabEmailService emailService)
        {
            _repository = userRepository;
            _cryptoService = cryptoService;
            _auditService = auditService;
            _logger = logger;
            _emailService = emailService;
        }
        
        /// <summary>
        /// Confirm the account
        /// </summary>
        /// <param name="userId">User Id Identification</param>
        /// <returns>
        /// </returns>
        public HttpStatusCode ConfirmEmail(string userId, string remoteIp)
        {
            var user = Get(userId);
            if (user == null)
            {
                return HttpStatusCode.NotFound;
            }

            HttpStatusCode success;
            var log = user.CreateAudit(MessageTexts.EmailConfirm, idAddress: remoteIp);

            try
            {
                if (user.IsConfirmed.HasValue ? !user.IsConfirmed.Value : false)
                {
                    user.IsConfirmed = true;
                    user.LastActivity = DateTime.Now;

                    _repository.Update(user);

                    log.Content = MessageTexts.Success;
                    success = HttpStatusCode.OK;
                }
                else
                {
                    log.Content = MessageTexts.EmailConfirmFailed;
                    success = HttpStatusCode.Unauthorized;
                }
            }
            catch (Exception ex)
            {
                success = LogError(log, ex);
                throw;
            }
            finally
            {
                _auditService.WriteLog(log);
            }
            
            return success;
        }

        /// <summary>
        /// Send a email to reset the password
        /// </summary>
        /// <param name="email">Email Address</param>
        /// <returns></returns>
        public HttpStatusCode ForgotPassword(string email, string remoteIp)
        {
            email = email.ToLower();
            var user = _repository
                .Find(u => u.Email.ToLower() == email && u.IsActive)
                .OrderBy(u => u.Created)
                .FirstOrDefault();

            if (user == null)
            {
                return HttpStatusCode.NotFound;
            }

            HttpStatusCode success;
            var log = user.CreateAudit(MessageTexts.ForgotPassword, idAddress: remoteIp);

            try
            {
                _emailService.SendEmail(user, "forgot.html", false);

                user.IsConfirmed = true;
                user.IsReseted = null;
                user.LastActivity = DateTime.Now;

                _repository.Update(user);
                log.Content = MessageTexts.Success;
                success = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                success = LogError(log, ex);
                throw;
            }
            finally
            {
                _auditService.WriteLog(log);
            }

            return success;
        }

        /// <summary>
        /// Reset the user password
        /// </summary>
        /// <param name="item">Account</param>
        /// <returns></returns>
        public HttpStatusCode ResetPassword(AccountDto item)
        {
            var user = Get(item.UserId);
            if (user == null)
            {
                return HttpStatusCode.NotFound;
            }

            HttpStatusCode success;
            var isConfirm = user.IsConfirmed.HasValue;
            var isReseted = user.IsReseted.HasValue ? user.IsReseted.Value : false;
            var log = user.CreateAudit(MessageTexts.ResetPassword, idAddress: item.RemoteIp);

            try
            {
                if ((isConfirm ? !isReseted : false) && item.Password == item.ConfirmPassword)
                {
                    user.Password = _cryptoService.Encrypt(item.Password);
                    user.IsConfirmed = true;
                    user.IsReseted = true;
                    user.LastActivity = DateTime.Now;

                    _repository.Update(user);
                    log.Content = MessageTexts.Success;
                    success = HttpStatusCode.OK;
                }
                else
                {
                    log.Content = MessageTexts.ResetPasswordFailed;
                    success = HttpStatusCode.Unauthorized;
                }
            }
            catch (Exception ex)
            {
                success = LogError(log, ex);
                throw;
            }
            finally
            {
                _auditService.WriteLog(log);
            }
            
            return success;
        }

        public void AuditPdf(string userId, Guid updatedBy, string content, string remoteIp)
        {
            var user = Get(userId);
            var log = user.CreateAudit(MessageTexts.GeneratePdf, idAddress: remoteIp);
            try
            {
                log.Content = content;
                log.UserId = user.Id;
                log.UpdatedBy = updatedBy;
            }
            catch (Exception ex)
            {
                LogError(log, ex);
                throw;
            }
            finally
            {
                _auditService.WriteLog(log);
            }
        }

        /// <summary>
        /// Enabled login for a user
        /// </summary>
        /// <param name="user"></param>
        /// <param name="remoteIp"></param>
        /// <param name="userAgent"></param>
        /// <returns></returns>
        public User Login(User user, string remoteIp, string userAgent)
        {
            var log = user.CreateAudit(MessageTexts.Login, idAddress: remoteIp);
            var success = false;
            User foundUser;

            try
            {
                var error = $"Error: {MessageTexts.LoginFailed}.";
                foundUser = Get(user.UserId, user.IdType, user.UserType, true);
                log.Content = error;

                if (foundUser != null)
                {
                    log = foundUser.CreateAudit(MessageTexts.Login, idAddress: remoteIp);
                    log.Content = error;
                    var loginPassword = _cryptoService.Encrypt(user.Password);

                    if (string.Equals(foundUser.Password, loginPassword))
                    {
                        log.Content = $"{MessageTexts.Success} {userAgent}";
                        success = true;
                    }

                    foundUser.IsConfirmed = true;
                    foundUser.IsReseted = null;
                    foundUser.LastActivity = DateTime.Now;
                    _repository.Update(foundUser);
                }
            }
            catch (Exception ex)
            {
                LogError(log, ex);
                throw;
            }
            finally
            {
                _auditService.WriteLog(log);

                if (!success)
                {
                    foundUser = null;
                }
            }
            return foundUser;
        }

        /// <summary>
        /// Get a user
        /// </summary>
        /// <param name="documentId"></param>
        /// <param name="documentType"></param>
        /// <param name="userType"></param>
        /// <returns></returns>
        public User Get(string documentId, string documentType, string userType, bool useNoTracking = false)
        {
            var user = _repository.Db.Users.Where(u => u.UserId == documentId
                    && u.IdType == documentType
                    && u.UserType == userType
                    && u.IsActive).AsNoTracking().FirstOrDefault();

            return user;
        }

        /// <summary>
        /// Change the user password
        /// </summary>
        /// <param name="item">Account</param>
        /// <returns></returns>
        public HttpStatusCode ChangePassword(AccountDto item)
        {
            string[] userName = item.UserId.Split('-');
            var userType = userName.Length > 0 ? userName[0].Trim() : string.Empty;
            var documentType = userName.Length > 1 ? userName[1].Trim() : string.Empty;
            var documentId = userName.Length > 2 ? userName[2].Trim() : string.Empty;
            var user = Get(documentId, documentType, userType);

            if (user == null)
            {
                return HttpStatusCode.NotFound;
            }

            HttpStatusCode success;
            var log = user.CreateAudit(MessageTexts.ChangePassword, idAddress: item.RemoteIp);
            log.Content = MessageTexts.ChangePasswordFailed;
            user.LastActivity = DateTime.Now;

            try
            {
                var currentPassword = _cryptoService.Encrypt(item.CurrentPassword);

                if (user.Password != currentPassword)
                {
                    success = HttpStatusCode.Forbidden;
                }
                else
                {
                    user.Password = _cryptoService.Encrypt(item.Password);
                    user.IsConfirmed = true;
                    user.IsReseted = true;                    

                    _repository.Update(user);
                    log.Content = MessageTexts.Success;
                    success = HttpStatusCode.OK;
                }
            }
            catch (Exception ex)
            {
                success = LogError(log, ex);
                throw;
            }
            finally
            {
                _auditService.WriteLog(log);
            }            
            return success;
        }

        private HttpStatusCode LogError(UserAudit log, Exception ex)
        {
            HttpStatusCode failure;
            _logger.LogError($"{ex.GetBaseException().Message}");
            log.Content = ex.GetBaseException().Message;
            failure = HttpStatusCode.InternalServerError;
            return failure;
        }

        /// <summary>
        /// Add a new user
        /// </summary>
        /// <param name="user"></param>
        /// <param name="remoteIp"></param>
        public Guid Add(PersonDto person)
        {
            User user = new User
            {
                Id = Guid.NewGuid(),
                IdType = person.DocumentType,
                UserId = person.DocumentId,
                Email = person.Email,
                FirstName = person.FirstName,
                LastName = person.LastName,
                UserType = person.UserType,
                IsActive = person.IsActive,
                IsConfirmed = null
            };

            if (IsDuplicate(user, true))
            {
                throw new InvalidOperationException(
                    string.Format(MessageTexts.UserDuplicated, $"{user.UserType}-{user.IdType}-{user.UserId}"));
            }

            user.Password = user.CreatePassword(_cryptoService);

            Audit(user, person.RemoteIp, person.UpdatedBy, MessageTexts.UserCreation, "Proceso exitoso", () =>
            {
                user.Created = DateTime.Now;
                user.LastActivity = DateTime.Now;
                _repository.Add(user);
            });

            return user.Id;
        }

        /// <summary>
        /// Update and existing user
        /// </summary>
        /// <param name="user"></param>
        /// <param name="remoteIp"></param>
        public void Update(PersonDto person)
        {
            var user = person.User;
            var changes = GetChanges(user, person);

            if (changes.Length == 0)
            {
                return;
            }

            user.Password = person.IsResetPassword ? user.CreatePassword(_cryptoService) : user.Password;
            user.IsConfirmed = true;
            user.IsConfirmed = person.IsSendMail ? null : user.IsConfirmed;
            user.IdType = person.DocumentType;
            user.UserId = person.DocumentId;
            user.Email = person.Email;
            user.FirstName = person.FirstName;
            user.LastName = person.LastName;
            user.UserType = person.UserType;
            user.IsActive = person.IsActive;

            if (IsDuplicate(user, false))
            {
                throw new InvalidOperationException(
                    string.Format(MessageTexts.UserDuplicated, $"{user.UserType}-{user.IdType}-{user.UserId}"));
            }

            Audit(user, person.RemoteIp, person.UpdatedBy, MessageTexts.UserUpdate, changes, () =>
            {
                user.Updated = DateTime.Now;
                user.LastActivity = DateTime.Now;
                _repository.Update(user);
            });
        }

        private string GetChanges(User start, PersonDto end)
        {
            var buffer = new StringBuilder();

            buffer.Append(end.IsResetPassword ? "Reiniciar contraseña. " : string.Empty);
            buffer.Append(start.UserType != end.UserType ? "Cambio tipo usuario. " : string.Empty);
            buffer.Append(start.UserId != end.DocumentId ? "Cambio documento. " : string.Empty);
            buffer.Append(start.IdType != end.DocumentType ? "Reiniciar contraseña. " : string.Empty);
            buffer.Append(start.FirstName != end.FirstName ? "Cambio nombres. " : string.Empty);
            buffer.Append(start.LastName != end.LastName ? "Cambio apellidos. " : string.Empty);
            buffer.Append(start.Email != end.Email ? "Cambio correo. " : string.Empty);

            return buffer.ToString();
        }

        /// <summary>
        /// Delete a user
        /// </summary>
        /// <param name="user"></param>
        /// <param name="remoteIp"></param>
        public void Remove(PersonDto person)
        {
            Audit(person.User, person.RemoteIp, person.UpdatedBy, MessageTexts.UserDelete, "Proceso exitoso", () => 
            {
                _repository.Delete(person.User);
            });
        }

        /// <summary>
        ///Get the user
        /// </summary>
        /// <param name="id">User Id</param>
        /// <returns></returns>
        public HttpStatusCode Exists(string id)
        {
            var user = Get(id);
            return (user == null) ? HttpStatusCode.NotFound : HttpStatusCode.OK;
        }

        /// <summary>
        /// Get the user
        /// </summary>
        /// <param name="id">User Id</param>
        /// <returns>User</returns>
        public User Get<T>(T id)
        {
            Guid userId;
            if (id.GetType() == typeof(string))
            {
                string code = (string)(object)id;
                userId = Guid.TryParseExact(code, "N", out userId) ? userId :
                    (Guid.TryParseExact(code, "D", out userId) ? userId : Guid.Empty);
            }
            else if (id.GetType() == typeof(Guid))
            {
                userId = (Guid)(object)id;
            }
            else
            {
                throw new ArgumentException(MessageTexts.IncorrectDataType);
            }

            return _repository.Get(userId);
        }

        /// <summary>
        /// Get the user
        /// </summary>
        /// <param name="id">User Id</param>
        /// <returns>User</returns>
        public User Get(Guid userId)
        {
            var user = _repository.Get(userId);

            user.LastActivity = DateTime.Now;
            _repository.Update(user);

            return user;
        }

        /// <summary>
        /// Find all the users that has email confirmation pending
        /// </summary>
        /// <returns></returns>
        public IEnumerable<User> Find(string filter)
        {
            var start = DateTime.Today.AddDays(-7);
            Regex regex = new Regex(@"^\d+$");
            IEnumerable<User> result = null;

            if (filter == "*")
            {
                result = _repository.Db.Users.AsNoTracking();
            }
            else if (regex.IsMatch(filter ?? string.Empty))
            {
                result = _repository.Db.Users.Where(u => u.UserId == filter).AsNoTracking();
            }
            else if (string.IsNullOrEmpty(filter))
            {
                result = _repository.Db.Users.Where(u => u.Created >= start).AsNoTracking();
            }
            else
            {
                filter = filter.ToLower();
                result = _repository.Db.Users.Where(u => 
                    string.Concat(u.FirstName, " ", u.LastName).ToLower().Contains(filter) || 
                    u.Email.ToLower().Contains(filter) ||
                    u.UserType.ToLower().Contains(filter)
                ).AsNoTracking();
            }

            return result;
        }

        /// <summary>
        /// Get the row count
        /// </summary>
        /// <returns></returns>
        public int GetRowCount()
        {
            return _repository.Find(u => u.IsActive, true).Count();
        }

        /// <summary>
        /// Execute and operation and perform audit
        /// </summary>
        /// <param name="user"></param>
        /// <param name="remoteIp"></param>
        /// <param name="actionName"></param>
        /// <param name="operation"></param>
        private void Audit(User user, string remoteIp, Guid updatedBy, string subject, string content, Action operation)
        {
            var log = user.CreateAudit(subject, idAddress: remoteIp);
            log.UserId = user.Id;
            log.UpdatedBy = updatedBy;

            try
            {
                operation();
                log.Content = content;
            }
            catch (Exception ex)
            {
                LogError(log, ex);
                throw;
            }
            finally
            {
                _auditService.WriteLog(log);
            }
        }

        /// <summary>
        /// Validate database constraints
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        private bool IsDuplicate(User user, bool isNew)
        {
            var isDuplicate = _repository
                .Find(u => 
                    u.UserId == user.UserId && 
                    u.IdType == user.IdType && 
                    u.UserType == user.UserType &&
                    u.Id != user.Id).Any();

            return isDuplicate;
        }               
    }
}