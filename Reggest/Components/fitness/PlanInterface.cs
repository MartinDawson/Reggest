using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public class PlanInterface : InterfaceGraphType<Plan>
    {
        public PlanInterface()
        {
            Name = nameof(Plan);

            Field<IdGraphType>("id");
            Field(x => x.Id).Name("planId");
            Field(x => x.Name);
            Field(x => x.Description);
            Field(x => x.Link, nullable: true);
            Field<ListGraphType<IntGraphType>>("workoutDaysPerWeek", "The days per week to workout for this plan");
            Field<TimeToWorkoutPayload>("timeToWorkout", "The time the workout takes in hours/minutes");
        }
    }
}
