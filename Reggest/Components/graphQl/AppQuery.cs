using GraphQL.Relay.Types;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
        public AppQuery(ILoggerFactory loggerFactory)
        {
            var logger = loggerFactory.CreateLogger<AppQuery>();

           
        }
    }
}
