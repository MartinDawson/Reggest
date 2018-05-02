using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Reggest.Components.fitness;
using Reggest.Components.qAndA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<FitnessPlan> FitnessPlans { get; set; }
        public DbSet<VariationPlan> VariationPlans { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<PlanAnswerPoint> PlansAnswersPoints { get; set; }
        public DbSet<Link> Links { get; set; }

        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
