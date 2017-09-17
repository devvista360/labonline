namespace LabOnline.Business.Domain
{
    public class ExamLine
    {
        public string ExamName { get; set; }
        public string Processed { get; set; }

        public override string ToString()
        {
            return ExamName ?? base.ToString();
        }
    }
}
