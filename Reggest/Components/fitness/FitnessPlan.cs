using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public enum Match
    {
        No = 0,
        Partial = 50,
        Perfect = 100,
    };

    public class FitnessPlan
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }
        public virtual ICollection<FitnessPlanAnswerPoint> FitnessPlanAnswerPoints { get; set; } = new List<FitnessPlanAnswerPoint>();
    }
}
