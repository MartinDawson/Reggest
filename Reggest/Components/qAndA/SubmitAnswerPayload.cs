using GraphQL.Relay.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;

namespace Reggest.Components.qAndA
{
    public class SubmitAnswerPayload : MutationPayloadGraphType
    {
        private readonly IAnswerService _answerService;

        public SubmitAnswerPayload(IAnswerService answerService)
        {
            _answerService = answerService;

            Name = nameof(SubmitAnswerPayload);

            Field<NonNullGraphType<AnswerPayload>>("answer");
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var id = inputs.Get<int>("id");
            var answer = _answerService.GetAnswer(id);

            return new
            {
                answer
            };
        }
    }
}
