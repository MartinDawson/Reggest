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
            Field(x => x.Name, nullable: true);
            Field(x => x.Description, nullable: true);
            Field(x => x.Link, nullable: true);
            Field(x => x.DaysPerWeek);
            Field<TimeToWorkoutPayload>("timeToWorkout", "The time the workout takes in hours/minutes", resolve: x =>
            {
                return new TimeToWorkout
                {
                    Hours = x.Source.TimeToCompleteWorkout?.Hours,
                    Minutes = x.Source.TimeToCompleteWorkout?.Minutes,
                };
            });
            Field<FitnessPlanPayload>("parentFitnessPlan", "The fitness plan that this variation plan is related to.");
            Field<ListGraphType<FitnessPlanPayload>>("variationPlans", "The different types of variations of this fitness plan.");
        }

        public override FitnessPlan GetById(string id)
        {
            return _fitnessPlanService.GetFitnessPlan(int.Parse(id));
        }
    }
}
