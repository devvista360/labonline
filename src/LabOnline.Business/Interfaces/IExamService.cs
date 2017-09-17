using LabOnline.Business.Domain;
using LabOnline.Business.Dtos;
using System.Collections.Generic;

namespace LabOnline.Business.Interfaces
{
    /// <summary>
    /// Database operations for Exams
    /// </summary>
    public interface IExamService
    {
        /// <summary>
        /// Find exams for the corresponding filter type
        /// </summary>
        /// <param name="year">Year</param>
        /// <param name="documentType">Document type</param>
        /// <param name="documentId">Document number</param>
        /// <param name="patientId">Patient identification</param>
        /// <returns></returns>
        List<ExamOrder> Find(ExamFilterType filterType, ExamFilterDto reportFilter);
    }    
}
