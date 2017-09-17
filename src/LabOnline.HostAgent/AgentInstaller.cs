namespace LabOnline.HostAgent
{
    #region Namespaces
    using System.ComponentModel;
    using System.ServiceProcess;
    #endregion

    [RunInstaller(true)]
    public partial class AgentInstaller : System.Configuration.Install.Installer
    {
        private ServiceProcessInstaller process;
        private ServiceInstaller service;

        public AgentInstaller()
        {
            process = new ServiceProcessInstaller() { Account = ServiceAccount.LocalSystem };
            service = new ServiceInstaller()
            {
                DisplayName = "LabOnline - Agente de Servicios",
                ServiceName = "LabOnlineAgent",
                Description = "Administrador de servicios para el laboratorio en Línea",
                DelayedAutoStart = true
            };
            Installers.Add(process);
            Installers.Add(service);
        }

        private void InitializeComponent()
        {
        }
    }
}