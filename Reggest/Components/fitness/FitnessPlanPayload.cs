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

            Id("planId", x => x.Id);
            Field(x => x.Name);
            Field(x => x.Description);
            Field(x => x.Link, nullable: true);
            Field<ListGraphType<IntGraphType>>("workoutDaysPerWeek", "The days per week to workout for this fitness plan", resolve: x => x.Source.WorkoutDaysPerWeek.Select(z => z.DaysPerWeek));
            Field<TimeToWorkoutPayload>("timeToWorkout", "The time the workout takes in hours/minutes", resolve: x =>
            {
                return new TimeToWorkout
                {
                    Hours = x.Source.TimeToCompleteWorkout.Hours,
                    Minutes = x.Source.TimeToCompleteWorkout.Minutes,
                };
            });
            Field<ListGraphType<VariationPlanPayload>>("variationPlans", "The different types of variations of this fitness plan.");
            Interface<PlanInterface>();
        }

        public override FitnessPlan GetById(string id)
        {
            return _fitnessPlanService.GetPlan(int.Parse(id));
        }
    }
}
