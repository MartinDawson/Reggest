using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.Extensions.Logging;
using Reggest.Components.qAndA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
        public AppQuery(ILoggerFactory loggerFactory, IQuestionService questionService)
        {
            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<QuestionPayload>()
                .Name("question")
                .Resolve(x => questionService.GetRandomQuestion());

        }
    }
}
