using System;

namespace LabOnline.Models
{
    /// <summary>
    /// Response token for authorization
    /// </summary>
    public class LabToken
    {
        /// <summary>
        /// Authorization token
        /// </summary>
        public string AccessToken { get; set; }
        /// <summary>
        /// Seconds to by expire the token
        /// </summary>
        public string ExpiresIn { get; set; }
        /// <summary>
        /// Authorized user
        /// </summary>
        public string UserName { get; set; }
        /// <summary>
        /// Authorized user name
        /// </summary>
        public string FullName { get; set; }
        /// <summary>
        /// Authorized user guid
        /// </summary>
        public string UserId { get; set; }
        /// <summary>
        /// Authorized user guid
        /// </summary>
        public DateTime DateCreated { get; set; }
    }
}
