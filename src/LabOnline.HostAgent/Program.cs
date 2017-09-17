using System.ServiceProcess;

namespace LabOnline.HostAgent
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>

        static void Main()
        {
            var isUserInteractive = GetInteractiveMode();
            if (isUserInteractive)
            {
                var myservice = new AgentService();
                myservice.OnDebug();
                System.Threading.Thread.Sleep(System.Threading.Timeout.Infinite);
            }
            else
            {
                ServiceBase[] ServicesToRun;
                ServicesToRun = new ServiceBase[] { new AgentService() };
                ServiceBase.Run(ServicesToRun);
            }
        }

        static bool GetInteractiveMode()
        {
#if DEBUG
            return true;
#else
            return false;
#endif
        }
    }
}