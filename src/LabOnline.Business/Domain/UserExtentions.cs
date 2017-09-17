using LabOnline.Business.Interfaces;
using LabOnline.Business.Models;
using System.Collections.Generic;
using System.Text;

namespace LabOnline.Business.Domain
{
    public static class UserExtentions
    {
        public static string GetJsonX(this User user)
        {
            var buffer = new StringBuilder();
            var confirmed = user.IsConfirmed == null ? "" : (user.IsConfirmed.Value ? "Si" : "No");
            var reseted = user.IsReseted == null ? "No" : (user.IsConfirmed.Value ? "Si" : "No");
            var active = user.IsActive ? "Si" : "No";

            buffer.Append("{ ");
            buffer.Append("\"id\": \"" + $"{user.UserType}-{user.IdType}-{user.UserId}" + "\", ");
            buffer.Append("\"nom\": \"" + $"{user.LastName}, {user.FirstName}" + "\", ");
            buffer.Append("\"cla\": \"" + $"{user.Password}" + "\", ");
            buffer.Append("\"crr\": \"" + $"{user.Email}" + "\", ");
            buffer.Append("\"cre\": \"" + $"{user.Created}" + "\", ");
            buffer.Append("\"cam\": \"" + $"{user.Updated}" + "\", ");
            buffer.Append("\"cfm\": \"" + $"{confirmed}" + "\", ");
            buffer.Append("\"act\": \"" + $"{active}" + "\", ");
            buffer.Append("\"olv\": \"" + $"{reseted}" + "\" ");
            buffer.Append("}");

            return buffer.ToString();
        }

        public static string GetProfileName(this User entity)
        {
            var userTypes = new Dictionary<string, string>()
                {
                    { "P", "Paciente" },
                    { "M", "Médico Remitente" },
                    { "E", "Empresa" },
                    { "S", "Soporte" }
                };

            string profile = userTypes.TryGetValue(entity.UserType, out profile) ? profile : entity.UserType;
            return profile;
        }

        /// <summary>
        /// Create a new log entry
        /// </summary>
        /// <param name="user"></param>
        /// <param name="subject"></param>
        /// <param name="content"></param>
        /// <param name="idAddress"></param>
        /// <returns></returns>
        public static UserAudit CreateAudit(this User entity, string subject, string content = null, string idAddress = null)
        {
            string fullName = null;

            if (!string.IsNullOrEmpty(entity.FirstName) && !string.IsNullOrEmpty(entity.LastName))
            {
                fullName = $"{entity.FirstName} {entity.LastName}";
            }

            return new UserAudit
            {
                UserCode = $"{entity.UserType}-{entity.IdType}-{entity.UserId}",
                UserName = fullName,
                Email = entity.Email,
                Subject = subject,
                Content = content,
                IpAddress = idAddress,
                UserId = entity.Id,
                UpdatedBy = entity.Id
            };
        }

        /// <summary>
        /// Generate the automatic text to be the password
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="cryptoService"></param>
        /// <returns></returns>
        public static string CreatePassword(this User entity, ICryptoService cryptoService = null)
        {
            const int length = 3;
            var letters = (entity.LastName ?? string.Empty).Split()[0].ToLower();
            var number = entity.UserId.Length > length ? entity.UserId.Substring(entity.UserId.Length - length) : entity.UserId;
            var password = string.Concat(letters, number);

            if (cryptoService == null)
            {
                return password;
            }

            return cryptoService.Encrypt(password);
        }
    }
}