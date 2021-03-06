﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public abstract class Plan
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public TimeSpan TimeToCompleteWorkout { get; set; }
        [Required]
        public virtual ICollection<Link> Links { get; set; } = new List<Link>();
        public virtual ICollection<WorkoutDayPerWeek> WorkoutDaysPerWeek { get; set; } = new List<WorkoutDayPerWeek>();
    }
}
