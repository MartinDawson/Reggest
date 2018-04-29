using Reggest.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.fitness
{
    public class PlanService<T> : IPlanService<T> where T : Plan
    {
        private readonly IRepository<T> _repository;

        public PlanService(IRepository<T> repository)
        {
            _repository = repository;
        }

        public virtual IEnumerable<T> GetAll()
        {
            return _repository.GetAll().BuildPlan();
        }

        public virtual T GetPlan(int id)
        {
            return GetAll().Single(x => x.Id == id);
        }
    }
}
