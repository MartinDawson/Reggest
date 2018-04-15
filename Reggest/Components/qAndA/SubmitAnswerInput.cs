using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class SubmitAnswerInput : MutationInputGraphType
    {
        public SubmitAnswerInput()
        {
            Name = nameof(SubmitAnswerInput);

            Field<NonNullGraphType<IntGraphType>>("id");
        }
    }
}
