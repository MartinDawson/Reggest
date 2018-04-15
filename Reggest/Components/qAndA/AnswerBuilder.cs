using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public static class AnswerBuilder
    {
        public static IQueryable<T> BuildAnswer<T>(this IQueryable<T> query) where T : Answer
        {
            return query.Include(x => x.Question);
        }
    }
}
