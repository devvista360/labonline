using LabOnline.Business.Domain;
using LabOnline.Business.Interfaces;
using System.Collections.Generic;
using LabOnline.Business.Dtos;
using LabOnline.Business.Models;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using System.Linq;

namespace LabOnline.Business.Services
{
    public class ExamService : IExamService
    {
        private readonly IRepository<UserAudit> _repository;
        private readonly ILogger<ExamService> _logger;
        private const string _inProcessing = "En-Proceso";

        /// <summary>
        /// Create the db context to access database model
        /// </summary>
        /// <param name="dbContext"></param>
        public ExamService(IRepository<UserAudit> userRepository, ILogger<ExamService> logger)
        {
            _repository = userRepository;
            _logger = logger;
        }

        public List<ExamOrder> Find(ExamFilterType filterType, ExamFilterDto filter)
        {
            List<ExamOrder> orders = new List<ExamOrder>();
            if (filter == null)
            {
                return orders;
            }

            var storedProcedures = new Dictionary<ExamFilterType, string>
            {
                { ExamFilterType.Patient, "v360_uspGetPatientExams" },
                { ExamFilterType.Doctor, "v360_uspGetDoctorExams" },
                { ExamFilterType.Organization, "v360_uspGetOrganizationExams" }
            };

            using (var connection = _repository.Db.Database.GetDbConnection())
            {
                connection.Open();
                using (var command = connection.CreateCommand())
                {
                    command.CommandText = storedProcedures[filterType];
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    var arguments = new Dictionary<string, object> { { "@year", filter.Year } };

                    switch (filterType)
                    {
                        case ExamFilterType.Patient:
                        case ExamFilterType.Doctor:
                            arguments.Add("@documentType", filter.DocumentType);
                            arguments.Add("@documentId", filter.DocumentId);
                            break;
                        case ExamFilterType.Organization:
                            arguments.Add("@documentId", filter.DocumentId);
                            arguments.Add("@patientId", filter.PatientId);
                            break;
                    }

                    foreach (var argument in arguments)
                    {
                        var parameter = command.CreateParameter();
                        parameter.ParameterName = argument.Key;
                        parameter.Value = argument.Value;
                        command.Parameters.Add(parameter);
                    }

                    orders = GetData(command);
                    connection.Close();
                }
            }

            return orders;
        }
        
        private string GetValue(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                value = _inProcessing;
            }
            return value;
        }
        
        private List<ExamOrder> GetData(DbCommand command)
        {
            //var orders = new List<ExamOrder>();
            var examId = string.Empty;            
            var orders = new Dictionary<string, ExamOrder>();

            var reader = command.ExecuteReader();
            while (reader.Read())
            {
                examId = GetValue(string.Concat(reader.GetString(1).Trim()));
                object[] values = new object[reader.FieldCount];
                reader.GetValues(values);
                ExamOrder examOrder;

                if (orders.ContainsKey(examId))
                {
                    examOrder = orders[examId];
                }
                else
                {
                    examOrder = new ExamOrder()
                    {
                        ExamDate = GetValue(values[0].ToString().Trim()),
                        ExamId = GetValue(values[1].ToString().Trim()),
                        PatientName = values[2].ToString().Trim(),
                        PatientId = values[3].ToString().Trim(),
                        LineItems = new List<ExamLine>()
                    };
                    orders.Add(examId, examOrder);
                }
                
                examOrder.LineItems.Add(new ExamLine
                {
                    Processed = values[4].ToString().Trim().ToUpper(),
                    ExamName = values[5].ToString().Trim()
                });
            }

            var items = orders.Values.ToList();
            return items;
        }
    }
}