namespace LabOnline.Business.Interfaces
{
    /// <summary>
    /// Interface to define the Job to send emails
    /// </summary>
    public interface IJobEmailService: IJobWorker
    {
        string ConnectionString { get; set; }
    }
}
