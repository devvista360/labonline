using LabOnline.Business.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace LabOnline.UI.Controllers
{
    [Route("api/[controller]")]
    public class AuditController : BaseController
    {
        /// <summary>
        /// Manager to handle user account operations
        /// </summary>
        private readonly IAuditUserService _dataService;

        public AuditController(ILogger<AuditController> logger, IAuditUserService auditService)
        {
            _logger = logger;
            _dataService = auditService;
        }

        [HttpGet]
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetAll(string id)
        {
            return await Task.FromResult(Get(id));
        }

        private IActionResult Get(string id)
        {
            var items = _dataService.GetAll(id);
            return new ObjectResult(items);
        }
    }
}
