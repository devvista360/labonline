using System.Collections.Generic;

namespace LabOnline.Integration.Interfaces
{
    public interface ICleanService
    {
        bool IsBusy { get; }
        List<string> Errors { get; }
        bool Execute();
    }
}
