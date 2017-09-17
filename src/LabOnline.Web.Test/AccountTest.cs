using RestSharp;
using System;
using Xunit;

namespace LabOnline
{
    public class AccountTest
    {
        string hostname = "http://localhost:14062/";

        [Fact]
        public void ConfirmEmail()
        {
            string resource = "/api/account/confirmEmail/";

            var client = new RestClient(hostname);
            var request = new RestRequest(resource, Method.POST)
            {
                RequestFormat = DataFormat.Json,
                OnBeforeDeserialization = resp => { resp.ContentType = "application/json"; }
            };

            client.AddDefaultHeader("Accept", "application/json");
            request.AddHeader("Cache-Control", "no-cache");

            request.AddBody(new { userId = "f3834612c196e611b67000090ffe0001" });

            var response = client.Execute(request);
            Console.WriteLine(response);

            Assert.True(response.StatusCode == System.Net.HttpStatusCode.OK);
        }
    }
}
