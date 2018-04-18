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

    public class FitnessPlan
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }
        public TimeSpan? TimeToCompleteWorkout { get; set; }
        public int DaysPerWeek { get; set; }
        public int? ParentFitnessPlanId { get; set; }
        public FitnessPlan ParentFitnessPlan { get; set; }
        public virtual ICollection<FitnessPlan> VariationPlans { get; set; } = new List<FitnessPlan>();
    }
}
