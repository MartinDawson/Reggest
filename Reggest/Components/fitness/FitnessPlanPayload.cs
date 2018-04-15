using GraphQL.Relay.Types;
using GraphQL.Types;
using Reggest.Components.fitness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class FitnessPlanPayload : GraphQl.NodeGraphType<FitnessPlan>
    {
        private readonly IFitnessPlanService _fitnessPlanService;

        public FitnessPlanPayload(IFitnessPlanService fitnessPlanService)
        {
            _fitnessPlanService = fitnessPlanService;

            Name = nameof(FitnessPlan);

            Id(x => x.Id);
            Field(x => x.Name);
            Field(x => x.Description);
            Field(x => x.Link);
            Field<ListGraphType<FitnessPlanAnswerPointPayload>>("fitnessPlanAnswerPoints");
        }

        public override FitnessPlan GetById(string id)
        {
            return _fitnessPlanService.GetFitnessPlan(int.Parse(id));
        }
    }
}
