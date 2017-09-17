using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;

// For more information on enabling Web API for empty projects, visit 
// http://go.microsoft.com/fwlink/?LinkID=397860
// https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api

namespace LabOnline.UI.Controllers
{
    using System.Threading.Tasks;
    using Business.Dtos;
    using Business.Interfaces;
    using Business.Domain;
    using Database.Dtos;

    /// <summary>
    /// Controller to handle people operations
    /// </summary>
    /// <example>
    /// https://chsakell.com/2016/06/23/rest-apis-using-asp-net-core-and-entity-framework-core/
    /// https://medium.com/@schneidenbach/restful-api-best-practices-and-common-pitfalls-7a83ba3763b5#.ihr772o97
    /// https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api
    /// http://asp.net-hacker.rocks/2016/04/12/aspnetcore-and-angular2-part2.html
    /// </example>
    [Route("api/[controller]/[action]")]
    public class PeopleController : BaseController
    {
        /// <summary>
        /// Manager to handle user account operations
        /// </summary>
        private readonly IAccountService _accountService;

        /// <summary>
        /// Configure the class initialization
        /// </summary>
        /// <param name="repository">Database context</param>
        /// <param name="logger">Service to log operations</param>
        public PeopleController(ILogger<PeopleController> logger, IAccountService accountService)
        {
            _logger = logger;
            _accountService = accountService;
        }

        // GET: api/People/All
        [HttpGet]
        [ActionName("All")]
        public async Task<IActionResult> GetAllAsync(PeopleFilterDto filter)
        {
            return await Task.FromResult(GetAllPeople(filter));
        }

        // GET: api/People/All
        [HttpGet]
        [ActionName("Count")]
        public int GetRowCountAsync()
        {
            return _accountService.GetRowCount();
        }

        // GET api/People/One/7b8b887f-1dbd-4f3b-993a-b0a2fad5b0bd
        [HttpGet]
        [ActionName("One")]
        public async Task<IActionResult> GetByIdAsync(PeopleFilterDto filter)
        {
            Guid id = filter != null ? filter.Id : Guid.Empty;
            return await Task.FromResult(GetById(id));
        }

        // POST api/People/Add/
        [HttpPost]
        [ActionName("Add")]
        public IActionResult Create([FromBody]PersonDto person)
        {
            if (person == null)
            {
                return BadRequest(new { Message = _modelMissing });
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(new { Message = _modelMissing, ModelState = GetErrors(ModelState) });
            }

            person.RemoteIp = HttpContext.Connection.RemoteIpAddress.ToString();
            person.AssignPassword = true;
            var userId = _accountService.Add(person);

            return new ObjectResult(new { id = userId, Modified = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") });
        }

        // PUT api/People/7b8b887f-1dbd-4f3b-993a-b0a2fad5b0bd
        [HttpPut("{id}")]
        [ActionName("Update")]
        public IActionResult Update(Guid id, [FromBody]PersonDto person)
        {
            if (person == null || person.Id != id)
            {
                return BadRequest(new { Message = _modelMissing });
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(new { Message = _modelMissing, ModelState = GetErrors(ModelState) });
            }

            person.RemoteIp = HttpContext.Connection.RemoteIpAddress.ToString();
            person.User = _accountService.Get(id);
            if (person.User == null)
            {
                return NotFound(new { Message = string.Format(_itemNotFound, id) });
            }

            _accountService.Update(person);
            return new ObjectResult(new { id = person.Id, Modified = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") });
        }

        // DELETE api/People/7b8b887f-1dbd-4f3b-993a-b0a2fad5b0bd
        [HttpDelete("{id}")]
        [ActionName("Delete")]
        public IActionResult Delete(string id)
        {
            var ids = id.Split('.');
            Guid userId = Guid.TryParseExact(ids[0], "D", out userId) ? userId : Guid.Empty;
            Guid updateId = Guid.TryParseExact(ids.Length > 1 ? ids[1] : string.Empty, "D", out updateId) ? updateId : Guid.Empty;

            var person = new PersonDto
            {
                Id = userId,
                UpdatedBy = updateId,
                User = _accountService.Get(userId),
                RemoteIp = HttpContext.Connection.RemoteIpAddress.ToString()
            };

            if (person.User == null)
            {
                return NotFound(new { Message = string.Format(_itemNotFound, id) });
            }

            _accountService.Remove(person);

            return new ObjectResult(new { id = person.Id, Modified = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss") });
        }

        public IActionResult GetAllPeople(PeopleFilterDto filter)
        {
            var users = _accountService.Find(filter != null ? filter.SearchCondition : null);

            var items = users.Select(user => new PersonDto
            {
                Id = user.Id,
                NationalId = string.Concat(user.IdType, "-", user.UserId),
                DocumentType = user.IdType,
                DocumentId = user.UserId,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserType = user.GetProfileName(),
                IsActive = user.IsActive,
                IsConfirmed = user.IsConfirmed == true,
                State = GetState(user.IsConfirmed, user.IsActive),
                LastActivity = user.Created.ToString("yyyy-MM-dd HH:mm"),
                Details = user.UserType == "S" ? string.Empty : user.Id.ToString()
            })
            .OrderByDescending(u => u.LastActivity)
            .ThenBy(u => u.FirstName)
            .ThenBy(u => u.LastName)
            .ThenBy(u => u.DocumentId);

            return new ObjectResult(items);
        }

        public IActionResult GetById(Guid id)
        {
            var user = _accountService.Get(id);
            if (user == null)
            {
                return NotFound(new { Message = string.Format(_itemNotFound, id) });
            }

            var person = new PersonDto
            {
                Id = user.Id,
                NationalId = string.Concat(user.IdType, "-", user.UserId),
                DocumentId = user.UserId,
                DocumentType = user.IdType,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserType = user.UserType,
                IsActive = user.IsActive,
                IsConfirmed = user.IsConfirmed == true,
                State = GetState(user.IsConfirmed, user.IsActive),
                LastActivity = user.LastActivity.HasValue ? user.LastActivity.Value.ToString("yyyy-MM-dd HH:mm") : null
            };

            return new ObjectResult(person);
        }

        // POST api/account/confirm
        [HttpPost]
        [ActionName("confirmEmail")]
        public IActionResult ConfirmEmail([FromBody] AccountDto item)
        {
            if (item != null)
            {
                try
                {
                    LogInfo($"Confirmar correo del usuario: {item.UserId}");
                    item.RemoteIp = HttpContext.Connection.RemoteIpAddress.ToString();

                    return EvaluateResult(_accountService.ConfirmEmail(item.UserId, item.RemoteIp));
                }
                catch (Exception ex)
                {
                    return StatusCode(LogException(ControllerContext.ActionDescriptor.ActionName, ex));
                }
            }

            return BadRequest();
        }

        [HttpPost]
        [ActionName("forgotPassword")]
        public IActionResult ForgotPassword([FromBody] AccountDto item)
        {
            if (item != null)
            {
                try
                {
                    LogInfo($"Olvido de contraseña del correo: {item.Email}");
                    item.RemoteIp = HttpContext.Connection.RemoteIpAddress.ToString();

                    return EvaluateResult(_accountService.ForgotPassword(item.Email, item.RemoteIp));
                }
                catch (Exception ex)
                {
                    return StatusCode(LogException(ControllerContext.ActionDescriptor.ActionName, ex));
                }
            }

            return BadRequest();
        }

        [HttpPost]
        [ActionName("validateresettoken")]
        public IActionResult ValidateResetPassword([FromBody] AccountDto item)
        {
            if (item != null)
            {
                try
                {
                    LogInfo($"Validar restablecer contraseña del usuario: {item.UserId}");

                    return EvaluateResult(_accountService.Exists(item.UserId));
                }
                catch (Exception ex)
                {
                    return StatusCode(LogException(ControllerContext.ActionDescriptor.ActionName, ex));
                }
            }

            return BadRequest();
        }

        [HttpPost]
        [ActionName("resetpassword")]
        public IActionResult ResetPassword([FromBody] AccountDto item)
        {
            if (item != null)
            {
                try
                {
                    _logger.LogInformation($"Restablecer la contraseña del usuario: {item.UserId}");
                    item.RemoteIp = HttpContext.Connection.RemoteIpAddress.ToString();

                    return EvaluateResult(_accountService.ResetPassword(item));
                }
                catch (Exception ex)
                {
                    return StatusCode(LogException(ControllerContext.ActionDescriptor.ActionName, ex));
                }
            }

            return BadRequest();
        }

        [HttpPost]
        [ActionName("changepassword")]
        public IActionResult ChangePassword([FromBody] AccountDto item)
        {
            if (item != null)
            {
                try
                {
                    _logger.LogInformation($"Change user password {item.UserId}");
                    item.RemoteIp = HttpContext.Connection.RemoteIpAddress.ToString();

                    return EvaluateResult(_accountService.ChangePassword(item));
                }
                catch (Exception ex)
                {
                    return StatusCode(LogException(ControllerContext.ActionDescriptor.ActionName, ex));
                }
            }

            return BadRequest();
        }

        /// <summary>
        /// Determinate the email confirm state
        /// </summary>
        /// <param name="isConfirmed"></param>
        /// <returns></returns>
        private string GetState(bool? isConfirmed, bool isActived)
        {
            if (!isConfirmed.HasValue)
            {
                return "Sin Notificar";
            }

            if (!isActived)
            {
                return "Bloqueada";
            }

            return (bool)isConfirmed ? "Activa" : "Notificada";
        }
    }
}