using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.graphQl
{
    public class Context
    {
        public HttpContext HttpContext { get; set; }
    }
}
