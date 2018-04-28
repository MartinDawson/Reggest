using Reggest.Components.fitness;
using Reggest.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class FitnessPlanService : IFitnessPlanService
    {
        private readonly IRepository<FitnessPlan> _repository;

        public FitnessPlanService(IRepository<FitnessPlan> repository)
        {
            _repository = repository;
        }

        public IEnumerable<FitnessPlan> GetAll()
        {
            return _repository.GetAll().BuildFitnessPlan();
        }

        public void AddFitnessPlans(ICollection<FitnessPlan> fitnessPlans)
        {
            foreach (var fitnessPlan in fitnessPlans)
            {
                _repository.Add(fitnessPlan);
            }
        }

        public FitnessPlan GetFitnessPlan(int id)
        {
            return _repository.GetAll().BuildFitnessPlan().Single(x => x.Id == id);
        }
    }
}
