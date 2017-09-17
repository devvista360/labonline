namespace LabOnline.Business.Domain
{
    /// <summary>
    /// Constants to security
    /// </summary>
    public static class SecurityConstants
    {
        /// <summary>
        /// The secret key every token will be signed with.
        /// </summary>
        public static string SecretKey
        {
            get { return "783d163b-4fe1-4ed0-b5c9-fe6063670c31"; }
        }

        /// <summary>
        /// A password used to generate a key for encryption
        /// </summary>
        public static string SecurityKey
        {
            get { return "ddf9aa60-8bec-48ad-991c-edc0fdfd79ff"; }
        }
    }
}
