namespace LabOnline.Business.Domain
{
    /// <summary>
    /// Basic interface email notification
    /// </summary>
    public class EmailMessage
    {
        /// <summary>
        /// List of FROM email address name, email
        /// </summary>
        public KeyValueList<string, string> From { get; set; }

        /// <summary>
        /// List of TO email address name, email
        /// </summary>
        public KeyValueList<string, string> To { get; set; }

        /// <summary>
        /// Email's subject
        /// </summary>
        public string Subject { get; set; }

        /// <summary>
        /// Email's body
        /// </summary>
        public string Body { get; set; }

        /// <summary>
        /// Flag indicating if the format is Html 
        /// </summary>
        public bool IsHtmlBody { get; set; }

        /// <summary>
        /// Domain server address
        /// </summary>
        public string SmtpDomainServer { get; set; }

        /// <summary>
        /// SMTP server address
        /// </summary>
        public string SmtpOutServer { get; set; }

        /// <summary>
        /// SMTP server port
        /// </summary>
        public int? SmtpOutPort { get; set; }

        /// <summary>
        /// Valid Domain User Name
        /// </summary>
        public string SmtpAccountUsername { get; set; }

        /// <summary>
        /// Valid Domain User Name password
        /// </summary>
        public string SmtpAccountPassword { get; set; }

        /// <summary>
        /// Flag indication if user SSL
        /// </summary>
        public bool IsSecure { get; set; }

        /// <summary>
        /// None = 0,
        /// Auto = 1,
        /// SslOnConnect = 2,
        /// StartTls = 3,
        /// StartTlsWhenAvailable = 4
        /// </summary>
        public int SecureSocketOptions { get; set; }

        /// <summary>
        /// Only needed if the SMTP server requires authentication
        /// </summary>
        public bool SmtpRequiresAuthentication { get; set; }

        public EmailMessage()
        {
            From = new KeyValueList<string, string>();
            To = new KeyValueList<string, string>();
        }
    }
}