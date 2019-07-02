using Microsoft.AspNetCore.Http;

namespace HangoutApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message){
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Hearders", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
        }
    }
}