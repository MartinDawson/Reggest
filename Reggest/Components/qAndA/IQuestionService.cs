using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public interface IQuestionService
    {
        Question GetQuestion(int id);
        Question GetRandomQuestion();
        IEnumerable<Question> GetQuestions();
    }
}
