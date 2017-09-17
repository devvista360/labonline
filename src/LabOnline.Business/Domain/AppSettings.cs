namespace LabOnline.Business.Domain
{
    /// <summary>
    /// Configuration settings to SMTP Server
    /// </summary>
    public class AppSettings
    {
        /// <summary>
        /// Smtp Server Url
        /// </summary>
        public string SmtpOutServer { get; set; }
        /// <summary>
        /// Smto Domain Server
        /// </summary>
        public string SmtpDomainServer { get; set; }
        /// <summary>
        /// Smtp out port server
        /// </summary>
        public int SmtpOutPort { get; set; }
        /// <summary>
        /// Email Accounr username
        /// </summary>
        public string SmtpAccountUsername { get; set; }
        /// <summary>
        /// Email Account Password
        /// </summary>
        public string SmtpAccountPassword { get; set; }
        /// <summary>
        /// Alias used for the application emails
        /// </summary>
        public string SmtpAccountUsernameAlias { get; set; }
        /// <summary>
        /// Smtp requires authentication
        /// </summary>
        public bool SmtpRequiresAuthentication { get; set; }
        /// <summary>
        /// Subject use for the reset confirmation email
        /// </summary>
        public string EmailSubjectAccounCreation { get; set; }
        /// <summary>
        /// Subject use for the reset password email
        /// </summary>
        public string EmailSubjectResetPassword { get; set; }
        /// <summary>
        /// Application Logo Path
        /// </summary>
        public string EmailLogoSignature { get; set; }
        /// <summary>
        /// Email list to send copy (comma separate)
        /// </summary>
        public string EmailsToCopy { get; set; }
        /// <summary>
        /// Application Site Url
        /// </summary>
        public string AppSiteUrl { get; set; }
        /// <summary>
        /// Location of the template to send email
        /// </summary>
        public string EmailsTemplatePath { get; set; }
        /// <summary>
        /// Amount of days to save log files
        /// </summary>
        public int LogFileDays { get; set; }
        /// <summary>
        /// Reporter Manager
        /// </summary>
        public string ReportServerUrl { get; set; }
    }
}