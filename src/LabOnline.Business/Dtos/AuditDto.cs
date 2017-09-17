using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LabOnline.Core.Dtos
{
    public class AuditDto
    {
        public string Created { get; set; }
        public string User { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string FromIp { get; set; }
        public string Task { get; set; }
    }
}
