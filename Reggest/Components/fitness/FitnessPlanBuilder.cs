using Microsoft.EntityFrameworkCore;
using Reggest.Components.fitness;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public static class FitnessPlanBuilder
    {
        public static IQueryable<T> BuildFitnessPlan<T>(this IQueryable<T> query) where T : FitnessPlan
        {
            return query;
        }
    }
}
