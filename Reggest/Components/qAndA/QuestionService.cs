using Reggest.Components.fitness;
using Reggest.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class QuestionService : IQuestionService
    {
        private readonly IRepository<Question> _repository;
        private readonly IFitnessPlanService _fitnessPlanService;
        private readonly IVariationPlanService _variationPlanService;

        public QuestionService(IRepository<Question> repository, IFitnessPlanService fitnessPlanService,
            IVariationPlanService variationPlanService)
        {
            _repository = repository;
            _fitnessPlanService = fitnessPlanService;
            _variationPlanService = variationPlanService;
        }

        public Question GetQuestion(int id)
        {
            var question = _repository.GetAll().BuildQuestion().Single(x => x.Id == id);

            foreach (var planAnswerPoint in question.PlanAnswerPoints)
            {
                if (planAnswerPoint.FitnessPlanId.HasValue)
                {
                    planAnswerPoint.FitnessPlan = _fitnessPlanService.GetPlan(planAnswerPoint.FitnessPlanId.Value);
                }

                if (planAnswerPoint.VariationPlanId.HasValue)
                {
                    planAnswerPoint.VariationPlan = _variationPlanService.GetPlan(planAnswerPoint.VariationPlanId.Value);
                }
            }

            return question;
        }

        public Question GetNextQuestion(int questionIndex)
        {
            return GetAll().Skip(questionIndex).FirstOrDefault();
        }

        public IEnumerable<Question> GetAll()
        {
            var questions = _repository.GetAll().BuildQuestion();

            return questions;
        }

        public void AddQuestions(ICollection<Question> questions)
        {
            foreach (var question in questions)
            {
                _repository.Add(question);
            }
        }
    }
}
