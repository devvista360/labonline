using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using System;
using System.Net;

namespace LabOnline.UI.Filters
{
    /// <summary>
    /// Control and log the error
    /// </summary>
    /// <example>
    /// https://weblog.west-wind.com/posts/2016/Oct/16/Error-Handling-and-ExceptionFilter-Dependency-Injection-for-ASPNET-Core-APIs
    /// https://www.asp.net/web-api/overview/error-handling/exception-handling
    /// </example>
    public class ServiceExceptionFilterAttribute : ExceptionFilterAttribute
    {
        /// <summary>
        /// Watch the exception to response with according status
        /// </summary>
        /// <param name="context"></param>
        public override void OnException(ExceptionContext context)
        {
            var exception = context.Exception.GetBaseException();
            var statusCode = exception is Exception ? HttpStatusCode.InternalServerError : HttpStatusCode.BadRequest;
            var reportError = new {
                message = exception.Message
            };
            string output = JsonConvert.SerializeObject(reportError);

            context.Result = new ContentResult
            {
                Content = output,
                ContentType = "application/json; charset=utf-8",
                StatusCode = (int?)statusCode
            };
        }
    }
}
