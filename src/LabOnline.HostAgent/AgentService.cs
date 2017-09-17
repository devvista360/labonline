using System.ServiceProcess;
using System.ServiceModel;
using System.Diagnostics;
using System;
using LabOnline.Integration.Services;
using System.Configuration;
using LabOnline.Integration.Interfaces;

namespace LabOnline.HostAgent
{
    public partial class AgentService : ServiceBase
    {
        private ServiceHost _hostAgent;
        private EventLog _logger;
        private System.Timers.Timer _timer;
        private ICleanService _cleanService;

        public AgentService()
        {
            InitializeComponent();

            _logger = new EventLog()
            {
                Source = "LabOnline",
                Log = "LabOnlineLog"
            };
            if (!EventLog.SourceExists(_logger.Source))
            {
                EventLog.CreateEventSource(_logger.Source, _logger.Log);
            }
            _cleanService = new CleanService(ConfigurationManager.AppSettings["PdfFolder"], 1);
        }
        public void OnDebug()
        {
            OnStart(null);
        }
        /// <summary>
        /// Setup long running services
        /// </summary>
        /// <param name="args"></param>
        protected override void OnStart(string[] args)
        {
            _logger.WriteEntry("Inicio");

            SetupLongRunning();

            _hostAgent = new ServiceHost(typeof(Integration.ExamService));
            _hostAgent.Open();
        }
        /// <summary>
        /// Stop long running processing
        /// </summary>
        protected override void OnStop()
        {
            _logger.WriteEntry("Termino");

            if (_hostAgent != null)
            {
                _hostAgent.Close();
                _hostAgent = null;
            }
        }

        private void SetupLongRunning()
        {
            const int stepMinutes = 1;          // Set up a timer to trigger every step.
            const int secondsToMinute = 60000;  // 60 seconds

            _timer = new System.Timers.Timer()
            {
                Enabled = true,
                Interval = secondsToMinute * stepMinutes
            };
            _timer.Elapsed += new System.Timers.ElapsedEventHandler(OnMonitoring);
            _timer.Start();
        }

        /// <summary>
        /// Monitoring
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="args"></param>
        public void OnMonitoring(object sender, System.Timers.ElapsedEventArgs args)
        {
            try
            {
                if (_cleanService.IsBusy)
                {
                    return;
                }

                if (!_cleanService.Execute())
                {
                    _logger.WriteEntry(string.Join(", ", _cleanService.Errors), EventLogEntryType.Error, 404);
                }
            }
            catch (Exception ex)
            {
                _logger.WriteEntry(ex.GetBaseException().ToString(), EventLogEntryType.Error, 500);
            }
        }
    }
}