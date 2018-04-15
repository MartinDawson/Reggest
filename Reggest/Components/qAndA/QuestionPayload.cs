using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class QuestionPayload : GraphQl.NodeGraphType<Question>
    {
        private readonly IQuestionService _questionService;

        public QuestionPayload(IQuestionService questionService)
        {
            _questionService = questionService;

            Name = nameof(Question);

            Id(x => x.Id);
            Field<StringGraphType>("questionText", "The question to ask the user");
            Field<ListGraphType<AnswerPayload>>("answers", "The answers for this question");
        }

        public override Question GetById(string id)
        {
            return _questionService.GetQuestion(int.Parse(id));
        }
    }
}
