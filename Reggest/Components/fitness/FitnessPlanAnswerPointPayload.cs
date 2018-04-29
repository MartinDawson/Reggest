using GraphQL.Relay.Types;
using GraphQL.Types;
using Reggest.Components.fitness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class PlanAnswerPointPayload : ObjectGraphType<PlanAnswerPoint>
    {
        public PlanAnswerPointPayload()
        {
            Name = nameof(PlanAnswerPoint);

            Field<IdGraphType>("id");
            Field(x => x.Points).Description("The number of points that the current answer gives for the plan");
            Field<FitnessPlanPayload>("fitnessPlan");
            Field<VariationPlanPayload>("variationPlan");
        }
    }
}
