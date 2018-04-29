using Microsoft.EntityFrameworkCore;
using Reggest.Components.fitness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public static class PlanBuilder
    {
        public static IQueryable<T> BuildPlan<T>(this IQueryable<T> query) where T : Plan
        {
            return query
                .Include(x => x.WorkoutDaysPerWeek);
        }
    }
}
