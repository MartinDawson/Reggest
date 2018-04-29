using Reggest.Components.qAndA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public class PlanAnswerPoint
    {
        public int Id { get; set; }
        public int Points { get; set; }
        public int? FitnessPlanId { get; set; }
        public virtual FitnessPlan FitnessPlan { get; set; }
        public int? VariationPlanId { get; set; }
        public virtual VariationPlan VariationPlan { get; set; }
    }
}
