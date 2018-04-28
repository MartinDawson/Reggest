using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public interface IFitnessPlanService
    {
        IEnumerable<FitnessPlan> GetAll();
        FitnessPlan GetFitnessPlan(int id);
        void AddFitnessPlans(ICollection<FitnessPlan> fitnessPlans);
    }
}
