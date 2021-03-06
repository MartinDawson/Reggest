﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public interface IFitnessPlanService : IPlanService<FitnessPlan>
    {
        void AddFitnessPlans(ICollection<FitnessPlan> fitnessPlans);
    }
}
