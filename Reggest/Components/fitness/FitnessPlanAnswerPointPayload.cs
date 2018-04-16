using GraphQL.Relay.Types;
using GraphQL.Types;
using Reggest.Components.fitness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class FitnessPlanAnswerPointPayload : GraphQl.NodeGraphType<FitnessPlanAnswerPoint>
    {
        public FitnessPlanAnswerPointPayload()
        {
            Name = nameof(FitnessPlanAnswerPoint);

            Id(x => x.Id);
            Field(x => x.Points).Description("The number of points that the current answer gives for the fitness plan");
            Field<AnswerPayload>("answer");
            Field<FitnessPlanPayload>("fitnessPlan");
        }

        public override FitnessPlanAnswerPoint GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
