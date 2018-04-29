using Reggest.Components.fitness;
using Reggest.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class VariationPlanService : PlanService<VariationPlan>, IVariationPlanService
    {
        private readonly IRepository<VariationPlan> _repository;

        public VariationPlanService(IRepository<VariationPlan> repository)
            : base(repository)
        {
            _repository = repository;
        }

        public override IEnumerable<VariationPlan> GetAll()
        {
            return base.GetAll().AsQueryable();
        }

        public override VariationPlan GetPlan(int id)
        {
            return GetAll().Single(x => x.Id == id);
        }
    }
}
