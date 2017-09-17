using LabOnline.Business.Interfaces;
using Microsoft.Extensions.Logging;
using MR.AspNetCore.Jobs;
using System;
using System.Threading.Tasks;

namespace LabOnline.UI.Services
{
    /// <summary>
    /// Background processor manager
    /// </summary>
    public class ApplicationJobService: IJob
    {
        private readonly ILogger<ApplicationJobService> _logger;
        private readonly IJobEmailService _emailManager;
        private bool _isBusy;
        public static string ConnectionString { get; set; }

        public ApplicationJobService(ILogger<ApplicationJobService> logging, IJobEmailService emailHandler)
        {
            _logger = logging;
            _emailManager = emailHandler;
        }

        public Task ExecuteAsync()
        {
            if (!_isBusy)
            {
                _isBusy = true;

                try
                {
                    _emailManager.ConnectionString = ConnectionString;
                    _emailManager.Execute();
                }
                catch (Exception ex)
                {
                    ex = ex.GetBaseException();
                    _logger.LogError($"ApplicationJobService.ExecuteAsync: {ex.Message}. {ex.InnerException?.Message}");
                }
                finally
                {
                    _isBusy = false;
                }
            }
            return Task.FromResult(0);
        }
    }
}
