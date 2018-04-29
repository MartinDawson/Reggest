using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public interface IPlanService<T> where T : Plan
    {
        IEnumerable<T> GetAll();
        T GetPlan(int id);
    }
}
