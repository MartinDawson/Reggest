using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.GraphQl
{
    public class ConnectionArguments
    {
        public int? First { get; set; }
        public string After { get; set; }
        public int? Last { get; set; }
        public string Before { get; set; }
    }
}
