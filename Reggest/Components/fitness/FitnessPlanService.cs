using Reggest.Components.fitness;
using Reggest.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class FitnessPlanService : PlanService<FitnessPlan>, IFitnessPlanService
    {
        private readonly IRepository<FitnessPlan> _repository;

        public FitnessPlanService(IRepository<FitnessPlan> repository)
            : base(repository)
        {
            _repository = repository;
        }

        public void AddFitnessPlans(ICollection<FitnessPlan> fitnessPlans)
        {
            foreach (var fitnessPlan in fitnessPlans)
            {
                _repository.Add(fitnessPlan);
            }
        }

        public override IEnumerable<FitnessPlan> GetAll()
        {
            return base.GetAll().AsQueryable().BuildFitnessPlan();
        }

        public override FitnessPlan GetPlan(int id)
        {
            return GetAll().Single(x => x.Id == id);
        }
    }
}
