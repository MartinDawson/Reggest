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

            Field<NonNullGraphType<ListGraphType<IntGraphType>>>("fitnessPlanIds", "Orders by the ids of fitnessPlans");
        }
    }
}
