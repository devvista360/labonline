using LabOnline.Business.Interfaces;
using LabOnline.Business.Models;
using LabOnline.Core.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;

namespace LabOnline.Business.Services
{
    public class AuditService: IAuditUserService
    {
        private readonly IRepository<UserAudit> _repository;
        private readonly ILogger<AuditService> _logger;

        public AuditService(IRepository<UserAudit> userRepository, ILogger<AuditService> logger)
        {
            _repository = userRepository;
            _logger = logger;
        }

        public void WriteLog(UserAudit message)
        {
            try
            {
                message.IpAddress = string.IsNullOrEmpty(message.IpAddress) ? GetIpAddress() : message.IpAddress;
                message.UserCode = string.IsNullOrEmpty(message.UserCode) ? Environment.MachineName : message.UserCode;
                message.Content = message.Content ?? string.Empty;

                _repository.Add(message);
            }
            catch (Exception ex)
            {
                _logger.LogError($"{ex.GetBaseException().Message}");
            }
        }

        public IEnumerable<AuditDto> GetAll(string id)
        {
            Guid userId = Guid.TryParseExact(id, "D", out userId) ? userId : Guid.Empty;

            var sql = string.Format(
                "select CONVERT(VARCHAR, a.registro, 120) [created], " +
                "a.usuario [user], " +
                "a.nombrecompleto [name], " +
                "a.correo [email], " +
                "a.direccionip [fromIp], " +
                "a.asunto + '. ' + a.contenido [task] " +
                "from [dbo].[v360_auditoria] a " +
                "where usuarioid = '{0}' " +
                "order by registro desc", userId);
            var items = new List<AuditDto>();

            using (var connection = _repository.Db.Database.GetDbConnection())
            {
                connection.Open();
                using (var command = connection.CreateCommand())
                {
                    command.CommandText = sql;
                    var reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        var item = new AuditDto();
                        item.Created = reader.GetString(0);
                        item.User = reader.GetString(1);
                        item.Name = reader.GetString(2);
                        item.Email = reader.GetString(3);
                        item.FromIp = reader.GetString(4);
                        item.Task = reader.GetString(5);
                        items.Add(item);
                    }
                }
                connection.Close();
            }

            return items;
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