using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public class TimeToWorkoutPayload : ObjectGraphType<TimeToWorkout>
    {
        public TimeToWorkoutPayload()
        {
            Name = nameof(TimeToWorkout);

            Field(x => x.Hours, nullable: true).Description("The amount of hours it takes to complete the workout");
            Field(x => x.Minutes, nullable: true).Description("The amount of minutes it takes to complete the workout");
        }
    }
}
