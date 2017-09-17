using RestSharp;
using LabOnline.Models;
using Xunit;
using System;

namespace LabOnline
{
    /// <summary>
    /// Validate the login access to the application
    /// </summary>
    public class LoginTest
    {
        string hostname = "http://localhost:14062/";
        string resource = "/token";

        [Fact]
        public void AllowAccess()
        {
            var token = LoginUser("P-CC-98123456", "3456");
            Assert.True(!string.IsNullOrEmpty(token.AccessToken));
        }

        [Fact]
        public void DenyAccess()
        {
            var token = LoginUser("P-CC-98123456", "3456X");
            Assert.True(token == null);
        }

        /// <summary>
        /// Create the api client
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        LabToken LoginUser(string username, string password)
        {
            var client = new RestClient(hostname);
            var request = new RestRequest(resource, Method.POST)
            {
                RequestFormat = DataFormat.Json,
                OnBeforeDeserialization = resp => { resp.ContentType = "application/json"; }
            };

            client.AddDefaultHeader("Accept", "application/json");

            request.AddHeader("Content-Type", "application/x-www-form-urlencoded");
            request.AddHeader("Cache-Control", "no-cache");

            request.AddParameter("username", username);
            request.AddParameter("password", password);

            var response = client.Execute<LabToken>(request);
            var token = response.Data;

            if(token != null)
            {
                token.DateCreated = DateTime.Now;
            }            

            return token;
        }
    }
}
