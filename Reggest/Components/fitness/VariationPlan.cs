using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public class VariationPlan : Plan
    {
        public int? FitnessPlanId { get; set; }
        public FitnessPlan FitnessPlan { get; set; }
    }
}
