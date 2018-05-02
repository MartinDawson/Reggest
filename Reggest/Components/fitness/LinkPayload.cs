using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public class LinkPayload : ObjectGraphType<Link>
    {
        public LinkPayload()
        {
            Name = nameof(Link);

            Field<IdGraphType>("id");
            Field(x => x.Title).Description("The title of what this link is");
            Field(x => x.Url);
        }
    }
}
