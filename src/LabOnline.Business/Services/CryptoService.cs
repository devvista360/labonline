using LabOnline.Business.Interfaces;
using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace LabOnline.Business.Services
{
    public class CryptoService: ICryptoService
    {
        private string _securityKey;

        public CryptoService(string securityKey)
        {
            _securityKey = securityKey;
        }

        public string Encrypt(string toEncrypt)
        {
            byte[] clearBytes = Encoding.Unicode.GetBytes(toEncrypt);
            string encryptString;

            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(_securityKey, new byte[] {
                    0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76
                });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);

                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                    }
                    encryptString = Convert.ToBase64String(ms.ToArray());
                }
            }
            return encryptString;
        }

        public string Decrypt(string toDecrypt)
        {
            string plaintext = toDecrypt.Replace(" ", "+");
            byte[] cipherBytes = Convert.FromBase64String(plaintext);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(_securityKey, new byte[] {
                    0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76
                });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                    }
                    plaintext = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return plaintext;
        }
    }
}