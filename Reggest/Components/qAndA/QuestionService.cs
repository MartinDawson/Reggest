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

        public QuestionService(IRepository<Question> repository)
        {
            _repository = repository;
        }

        public Question GetQuestion(int id)
        {
            return _repository.GetAll().BuildQuestion().Single(x => x.Id == id);
        }

        public Question GetRandomQuestion()
        {
            return _repository.GetAll().BuildQuestion().OrderBy(r => Guid.NewGuid()).First();
        }

        public IEnumerable<Question> GetQuestions()
        {
            var questions = _repository.GetAll().BuildQuestion();

            return questions;
        }
    }
}
