using LabOnline.Business.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace LabOnline.Business.Dtos
{
    /// <summary>
    /// DTO for user data
    /// </summary>
    public class PersonDto
    {
        public PersonDto()
        {
            Id = Guid.NewGuid();
        }

        [Required(ErrorMessage = "El campo Id es requerido")]
        public Guid Id { get; set; }
        public string NationalId { get; set; }
        [Required(ErrorMessage = "El campo DocumentType es requerido")]
        public string DocumentType { get; set; }
        [Required(ErrorMessage = "El campo DocumentId es requerido")]
        public string DocumentId { get; set; }
        public string Password { get; set; }
        [Required(ErrorMessage = "El campo Email es requerido")]
        public string Email { get; set; }
        [Required(ErrorMessage = "El campo FirstName es requerido")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "El campo LastName es requerido")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "El campo UserType es requerido")]
        public string UserType { get; set; }
        public bool IsActive { get; set; }        
        public bool IsConfirmed { get; set; }
        public bool IsResetPassword { get; set; }
        public string State { get; set; }
        public bool IsSendMail { get; set; }
        public string LastActivity { get; set; }
        public string Details { get; set; }
        public Guid UpdatedBy { get; set; }
        public string RemoteIp { get; set; }
        public bool AssignPassword { get; set; }
        public User User { get; set; }
    }
}