using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Reggest.Data;
using Newtonsoft.Json;
using Reggest.Components.fitness;

namespace Reggest.Controllers
{
    public class AppController : Controller
    {
        private readonly IFitnessPlanService _fitnessPlanService;

        public AppController(IFitnessPlanService fitnessPlanService)
        {
            _fitnessPlanService = fitnessPlanService;
        }

        [Produces("text/html")]
        public IActionResult Index()
        {
            return View("~/wwwroot/build/index.html");
        }

        [Produces("application/xml")]
        public IActionResult Sitemap()
        {
            return View("~/wwwroot/sitemap.xml");
        }

        public IActionResult GetJavaScript()
        {
            var fitnessPlans = _fitnessPlanService.GetAll();
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