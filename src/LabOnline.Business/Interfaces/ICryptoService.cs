namespace LabOnline.Business.Interfaces
{
    public interface ICryptoService
    {
        string Encrypt(string toEncrypt);
        string Decrypt(string toDecrypt);
    }
}
