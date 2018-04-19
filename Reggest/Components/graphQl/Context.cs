using Microsoft.AspNetCore.Http;
using Reggest.Components.account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.graphQl
{
    public class Context
    {
        public ApplicationUser CurrentUser { get; set; }
        public HttpContext HttpContext { get; set; }
    }
}
