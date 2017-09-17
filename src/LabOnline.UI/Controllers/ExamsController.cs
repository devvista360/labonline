using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using LabOnline.Business.Dtos;
using Newtonsoft.Json;
using System.Net.Http;
using LabOnline.Business.Interfaces;
using LabOnline.Business.Domain;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Options;
using System.IO;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace LabOnline.UI.Controllers
{
    [Route("api/[controller]")]
    public class ExamsController : BaseController
    {
        /// <summary>
        /// Database access
        /// </summary>
        private readonly IExamService _repository;
        /// <summary>
        /// Base path for Pdf documents
        /// </summary>
        private readonly string _pdfPath;
        /// <summary>
        /// Application configuration settings
        /// </summary>
        private readonly AppSettings _appSettings;
        /// <summary>
        /// Trace audit
        /// </summary>
        private readonly IAccountService _audit;

        /// <summary>
        /// Initialize the controller
        /// </summary>
        /// <param name="dbContext">Database context</param>
        public ExamsController(IExamService dbContext,
                                ILogger<ExamsController> logger,
                                IHostingEnvironment appEnvironment,
                                IOptions<AppSettings> config,
                                IAccountService audit)
        {
            _repository = dbContext;
            base._logger = logger;
            _pdfPath = Path.Combine(Path.Combine(appEnvironment.WebRootPath, "api"), "pdf");
            _appSettings = config.Value;
            _audit = audit;
        }

        // GET: api/Exam
        [HttpGet("patient/{year}/{type}/{id}")]
        public List<ExamOrder> GetExamsByPatient(int year, string type, string id)
        {
            var filter = new ExamFilterDto { Year = year, DocumentType = type, DocumentId = id };
            var exams = new List<ExamOrder>();

            try
            {
                exams = _repository.Find(ExamFilterType.Patient, filter);
            }
            catch (Exception ex)
            {
                LogException(ControllerContext.ActionDescriptor.ActionName, ex);
            }

            return exams;
        }

        // GET: api/Exam
        [HttpGet("doctor/{year}/{type}/{id}")]
        public List<ExamOrder> GetDoctorExams(int year, string type, string id)
        {
            var exams = new List<ExamOrder>();
            var filter = new ExamFilterDto { Year = year, DocumentType = type, DocumentId = id };

            try
            {
                exams = _repository.Find(ExamFilterType.Doctor, filter);
            }
            catch (Exception ex)
            {
                LogException(ControllerContext.ActionDescriptor.ActionName, ex);
            }

            return exams;
        }

        // GET: api/Exam
        [HttpGet("organization/{year}/{id}/{patient}")]
        public List<ExamOrder> GetOrganizationExams(int year, string id, string patient)
        {
            var exams = new List<ExamOrder>();
            var filter = new ExamFilterDto { Year = year, DocumentId = id, PatientId = patient == "*" ? "" : patient };

            try
            {
                exams = _repository.Find(ExamFilterType.Organization, filter);
            }
            catch (Exception ex)
            {
                LogException(ControllerContext.ActionDescriptor.ActionName, ex);
            }

            return exams;
        }

        // GET: api/Exam/Pdf
        [HttpGet("pdf/{id}/{userId}")]
        public ExamDto GetReport(string id, string userId)
        {
            ExamDto fileName = new ExamDto();
            string urlApi = $"{_appSettings.ReportServerUrl}/{id}";
            var remoteIp = HttpContext.Connection.RemoteIpAddress.ToString();
            var createdBy = userId.Split('.')[0];
            Guid updateBy = Guid.TryParseExact(userId.Split('.')[1], "D", out updateBy) ? updateBy : Guid.Empty;

            try
            {
                using (var client = new HttpClient())
                {
                    client.Timeout = TimeSpan.FromMinutes(5);
                    var response = client.GetStringAsync(urlApi);
                    var data = response.Result;
                    var report = JsonConvert.DeserializeObject<ExamDto>(data);

                    if (report != null)
                    {
                        fileName.Error = report.Error;
                        var state = "NO generado";
                        if (!string.IsNullOrEmpty(report.Name))
                        {
                            state = "generado";
                            fileName.Exists = true;
                            fileName.Name = string.Concat("/pdf/", report.Name);
                        }
                        _audit.AuditPdf(createdBy, updateBy, $"{id} {state} {fileName.Error}", remoteIp);
                    }
                }
            }
            catch (Exception ex)
            {
                _audit.AuditPdf(createdBy, updateBy, $"{id}. Error: {ex.GetBaseException().Message}", remoteIp);
                fileName.Error = ex.GetBaseException().Message;
                LogException(ControllerContext.ActionDescriptor.ActionName, ex);
            }

            return fileName;
        }
    }
}
