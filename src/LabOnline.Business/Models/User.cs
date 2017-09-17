using System;

namespace LabOnline.Business.Models
{
    public class User : BaseEntity
    {
        public string IdType { get; set; }
        public string UserId { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserType { get; set; }
        public DateTime Created { get; set; }
        public bool IsActive { get; set; }
        public bool? IsConfirmed { get; set; }
        public bool? IsReseted { get; set; }
        public DateTime? Updated { get; set; }
        public DateTime? LastActivity { get; set; }        
    }
}
