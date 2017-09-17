using LabOnline.Business.Models;
using LabOnline.Core.Dtos;
using System.Collections.Generic;

namespace LabOnline.Business.Interfaces
{
    public interface IAuditUserService
    {
        void WriteLog(UserAudit message);
        IEnumerable<AuditDto> GetAll(string filter);
    }
}
