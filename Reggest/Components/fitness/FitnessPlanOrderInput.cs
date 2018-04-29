using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public class FitnessPlanOrderInput : InputObjectGraphType
    {
        public FitnessPlanOrderInput()
        {
            Name = nameof(FitnessPlanOrderInput);
            Description = "Provides ordering";

            Field<NonNullGraphType<ListGraphType<IntGraphType>>>("planIds", "Orders by the ids of the plans");
        }
    }
}
