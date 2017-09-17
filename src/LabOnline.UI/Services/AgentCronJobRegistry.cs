using MR.AspNetCore.Jobs;

namespace LabOnline.UI.Services
{
    public class AgentCronJobRegistry: CronJobRegistry
    {
        public AgentCronJobRegistry()
        {
            RegisterJob<ApplicationJobService>(nameof(ApplicationJobService), Cron.Minutely());
        }
    }
}
