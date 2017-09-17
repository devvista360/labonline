using System.ServiceModel;
using System.ServiceModel.Web;
using LabOnline.Integration.Dtos;

namespace LabOnline.Integration
{
    /// <summary>
    /// Service to handle all operations for LabOnline windows services
    /// </summary>
    /// <example>
    /// How to create a JSON WCF RESTful Service in 60 seconds
    /// https://www.codeproject.com/articles/167159/how-to-create-a-json-wcf-restful-service-in-sec
    /// 
    /// WCF RESTful on Windows Service Host
    /// https://www.codeproject.com/tips/1009004/wcf-restful-on-windows-service-host
    /// </example>
    [ServiceContract]
    public interface IExamService
    {
        // http://localhost:8888/api/exams/CL-1279714
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "exams/{id}", ResponseFormat = WebMessageFormat.Json)]
        ExamDto GetDocument(string id);
    }
}