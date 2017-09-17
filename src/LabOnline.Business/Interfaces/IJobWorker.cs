namespace LabOnline.Business.Interfaces
{
    /// <summary>
    /// Background worker operations
    /// </summary>
    public interface IJobWorker
    {
        /// <summary>
        /// Run the process
        /// </summary>
        void Execute();
    }
}
