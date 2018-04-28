using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Reggest.Data;
using Newtonsoft.Json;

namespace Reggest.Controllers
{
    public class AppController : Controller
    {
        [Produces("text/html")]
        public IActionResult Index()
        {
            return View("~/wwwroot/build/index.html");
        }

        public IActionResult GetJavaScript()
        {
            var fitnessPlans = Seeder.FitnessPlans.Select(x => new
            {
                x.Name,
                x.Description,
                x.Link,
            });
            var constants = new
            {
                fitnessPlans,
            };
            var json = JsonConvert.SerializeObject(constants);
            var javaScript = $"window._Constants = {json}";

            return Content(javaScript);
        }
    }
}