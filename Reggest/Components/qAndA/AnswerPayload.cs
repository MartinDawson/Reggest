using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class AnswerPayload : GraphQl.NodeGraphType<Answer>
    {
        private readonly IAnswerService _answerService;

        public AnswerPayload(IAnswerService answerService)
        {
            _answerService = answerService;

            Name = nameof(Answer);

            Id(x => x.Id);
            Field<StringGraphType>("answerText", "An answer to present to the user");
            Field<QuestionPayload>("question", "The question associated with this answer");
        }

        public override Answer GetById(string id)
        {
            return _answerService.GetAnswer(int.Parse(id));
        }
    }
}
