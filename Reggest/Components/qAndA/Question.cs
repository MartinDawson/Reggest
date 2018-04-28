using Reggest.Components.fitness;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class Question
    {
        public int Id { get; set; }
        [Required]
        public string QuestionText { get; set; }
        public virtual ICollection<Answer> Answers { get; set; } = new List<Answer>();
        public virtual ICollection<FitnessPlanAnswerPoint> FitnessPlanAnswerPoints { get; set; } = new List<FitnessPlanAnswerPoint>();
    }
}
