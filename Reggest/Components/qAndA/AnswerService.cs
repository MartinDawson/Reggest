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

        public AnswerService(IRepository<Answer> repository)
        {
            _repository = repository;
        }

        public Answer GetAnswer(int id)
        {
            return _repository.GetAll().BuildAnswer().Single(x => x.Id == id);
        }
    }
}
