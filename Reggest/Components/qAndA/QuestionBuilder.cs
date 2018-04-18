using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public static class QuestionBuilder
    {
        public static IQueryable<T> BuildQuestion<T>(this IQueryable<T> query) where T : Question
        {
            return query
                .Include(x => x.Answers)
                .Include(x => x.FitnessPlanAnswerPoints);
        }
    }
}
