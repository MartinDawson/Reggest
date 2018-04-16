using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public enum Match
    {
        [Display(Name = "Extremely dislike")]
        VeryDislike = 0,
        [Display(Name = "Dislike")]
        Dislike = 1,
        [Display(Name = "Don't care")]
        DontCare = 2,
        [Display(Name = "Like")]
        Like = 3,
        [Display(Name = "Extremely like")]
        VeryLike = 4,
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
