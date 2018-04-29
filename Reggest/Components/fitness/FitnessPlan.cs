using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public enum AnswerMatch
    {
        FirstAnswer = 1,
        SecondAnswer = 2,
        ThirdAnswer = 3,
        FourthAnswer = 4,
        FifthAnswer = 5,
        SixthAnswer = 6,
    }

    public class FitnessPlan : Plan
    {
        public virtual ICollection<VariationPlan> VariationPlans { get; set; } = new List<VariationPlan>();
    }
}
