using System;
using System.Configuration;
using System.IO;
using Vista360.LaboratoryReport;
using LabOnline.Integration.Dtos;

namespace LabOnline.Integration
{
    public class ExamService : IExamService
    {
        public ExamDto GetDocument(string id)
        {
            ExamDto document = new ExamDto();
            var request = $"Solicitud '{id}':";

            try
            {
                var args = id.Split('-');
                if (args.Length != 2)
                {
                    return NotifyError(id, document, "Argumentos incorrectos para generar el pdf");
                }

                var pdfFolder = ConfigurationManager.AppSettings["PdfFolder"];
                if(string.IsNullOrEmpty(pdfFolder))
                {
                   return NotifyError(id, document, "Variable en AppSettings 'PdfFolder' no esta definida");
                }

                if (!Directory.Exists(pdfFolder))
                {
                    return NotifyError(id, document, $"El directorio compartido para los PDFs '{pdfFolder}' no existe o no se tiene acceso");
                }

                document.Name = GenerateDocument(args[0], args[1], Path.Combine(pdfFolder, $"{args[0]}-{args[1]}.pdf"));
                document.Exists = !string.IsNullOrEmpty(document.Name);
            }
            catch (Exception ex)
            {
                return NotifyError(id, document, ex.GetBaseException().Message);
            }
            return document;
        }

        private ExamDto NotifyError(string id, ExamDto document, string error)
        {
            document.Error = $"Solicitud '{id}': {error}";
            return document;
        }

        /// <summary>
        /// Generate the report
        /// </summary>
        /// <param name="documentType"></param>
        /// <param name="documentId"></param>
        /// <param name="pdfFile"></param>
        /// <returns></returns>
        private string GenerateDocument(string documentType, string documentId, string pdfFile)
        {
            var report = new LaboratoryReport();
            report.generateLaboratoryReport(documentType, documentId, pdfFile);
            return $"{documentType}-{documentId}.pdf";
        }
    }
}