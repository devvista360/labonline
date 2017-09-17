using System.Collections.Generic;

namespace LabOnline.Business.Domain
{
    public class ExamOrder
    {
        public string ExamDate { get; set; }
        public string ExamId { get; set; }
        public string PatientName { get; set; }
        public string PatientId { get; set; }        
        public List<ExamLine> LineItems { get; set; }
        public override string ToString()
        {
            return ExamId ?? base.ToString();
        }
    }
}
