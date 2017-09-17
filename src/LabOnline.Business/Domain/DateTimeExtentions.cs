 using System;

namespace LabOnline.Business.Domain
{
    public static class DateTimeExtentions
    {
        public static long ToUnixTimeSeconds(this DateTime value)
        {
            var dateTime = new DateTime(value.Year, value.Month, value.Day, value.Hour, value.Minute, value.Second, DateTimeKind.Local);
            var dateTimeOffset = new DateTimeOffset(dateTime);
            var unixDateTime = dateTimeOffset.ToUnixTimeSeconds();
            return unixDateTime;
        }
    }
}
