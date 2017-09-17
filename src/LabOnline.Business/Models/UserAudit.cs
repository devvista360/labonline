using System;

namespace LabOnline.Business.Models
{
    public class UserAudit: BaseEntity
    {
        public string UserCode { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string IpAddress { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        public Guid UserId { get; set; }
        public Guid UpdatedBy { get; set; }


        public UserAudit()
        {
            Created = DateTime.Now;
        }
    }
}
