using GraphQL.Relay.Types;
using GraphQL.Types;
using Reggest.Components.fitness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class VariationPlanPayload : ObjectGraphType<VariationPlan>
    {
        public VariationPlanPayload()
        {
            Name = nameof(VariationPlan);

            Field<IdGraphType>("id");
            Field(x => x.Id).Name("planId");
            Field(x => x.Name);
            Field(x => x.Description);
            Field(x => x.Link, nullable: true);
            Field<ListGraphType<IntGraphType>>("workoutDaysPerWeek", "The days per week to workout for this variation plan", resolve: x => x.Source.WorkoutDaysPerWeek.Select(z => z.DaysPerWeek));
            Field<TimeToWorkoutPayload>("timeToWorkout", "The time the workout takes in hours/minutes", resolve: x =>
            {
                return new TimeToWorkout
                {
                    Hours = x.Source.TimeToCompleteWorkout.Hours,
                    Minutes = x.Source.TimeToCompleteWorkout.Minutes,
                };
            });
            Field<FitnessPlanPayload>("parentFitnessPlan", "The fitness plan that this variation plan is related to.");
            Interface<PlanInterface>();
        }
    }
}
