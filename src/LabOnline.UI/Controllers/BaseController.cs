using LabOnline.UI.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace LabOnline.UI.Controllers
{
    /// <summary>
    /// Controller to handle account operations
    /// </summary>
    /// <example>
    /// https://docs.asp.net/en/latest/tutorials/first-web-api.html
    /// https://www.asp.net/identity/overview/features-api/account-confirmation-and-password-recovery-with-aspnet-identity
    /// http://blog.scottlogic.com/2016/01/20/restful-api-with-aspnet50.html
    /// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    /// 
    /// LOGGING
    /// http://blog.scottlogic.com/2016/01/20/restful-api-with-aspnet50.html
    /// </example>
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true, Duration = -1)]
    [ServiceExceptionFilterAttribute]
    public class BaseController : Controller
    {
        protected ILogger _logger;
        protected const string _itemNotFound = "El item con id = {0} no fue encontrado";
        protected const string _modelMissing = "La petición es inválida";
        
        /// <summary>
        /// Convert the result HttpStatusCode to Controler Result
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        protected IActionResult EvaluateResult(System.Net.HttpStatusCode result)
        {
            switch (result)
            {
                case System.Net.HttpStatusCode.OK:
                    return Ok(new { status = "ok" });
                case System.Net.HttpStatusCode.NotFound:
                    return NotFound();
                case System.Net.HttpStatusCode.Forbidden:
                    return Forbid();
                case System.Net.HttpStatusCode.Unauthorized:
                    return Unauthorized();
                default:
                    return BadRequest();
            }
        }

        /// <summary>
        /// Log the exception
        /// </summary>
        /// <param name="controllerName">Controller name</param>
        /// <param name="ex">Unhandled exception</param>
        /// <returns>Status code</returns>
        protected int LogException(string controllerName, Exception ex)
        {
            _logger.LogError(string.Concat(controllerName, ": ", ex.GetBaseException().Message));
            return (int)System.Net.HttpStatusCode.InternalServerError;
        }

        /// <summary>
        /// Log information for analysis process
        /// </summary>
        /// <param name="info">Message</param>
        /// <param name="controllerName">Controller name</param>
        protected void LogInfo(string info, [CallerMemberName]string controllerName = "")
        {
            _logger.LogInformation(string.Concat(controllerName, ": ", info));
        }

        /// <summary>
        /// Log the state in json format
        /// </summary>
        /// <param name="controllerName">Controller name</param>
        /// <param name="jsonState">state</param>
        protected void LogState(string controllerName, object jsonState)
        {
            _logger.LogInformation(string.Concat(controllerName, ": {@jsonState}"), jsonState);
        }

        /// <summary>
        /// Generate a error list
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        protected List<string> GetErrors(ModelStateDictionary model)
        {
            var errors = new List<string>();
            foreach (var state in model)
            {
                foreach (var error in state.Value.Errors)
                {
                    errors.Add(error.ErrorMessage);
                }
            }
            return errors;
        }
    }
}