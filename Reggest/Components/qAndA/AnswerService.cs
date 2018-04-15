using Reggest.Components.fitness;
using Reggest.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class AnswerService : IAnswerService
    {
        private readonly IRepository<Answer> _repository;
        private readonly IFitnessPlanService _fitnessPlanService;

        public AnswerService(IRepository<Answer> repository, IFitnessPlanService fitnessPlanService)
        {
            _repository = repository;
            _fitnessPlanService = fitnessPlanService;
        }

        public Answer GetAnswer(int id)
        {
            var answer = _repository.GetAll().BuildAnswer().Single(x => x.Id == id);

            foreach (var fitnessPlanAnswerPoint in answer.FitnessPlanAnswerPoints)
            {
                fitnessPlanAnswerPoint.FitnessPlan = _fitnessPlanService.GetFitnessPlan(fitnessPlanAnswerPoint.FitnessPlanId);
            }

            return answer;
        }
    }
}
