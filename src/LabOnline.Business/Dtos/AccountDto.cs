namespace LabOnline.Database.Dtos
{
    /// <summary>
    /// DTO Account Operation
    /// </summary>
    public class AccountDto
    {
        public string UserId { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string CurrentPassword { get; set; }
        public string Email { get; set; }
        public string RemoteIp { get; set; }
    }
}
