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
        private readonly IQuestionService _questionService;

        public AnswerService(IRepository<Answer> repository, IQuestionService questionService)
        {
            _repository = repository;
            _questionService = questionService;
        }

        public Answer GetAnswer(int id)
        {
            var answer = _repository.GetAll().BuildAnswer().Single(x => x.Id == id);

            answer.Question = _questionService.GetQuestion(answer.QuestionId);

            return answer;
        }
    }
}
