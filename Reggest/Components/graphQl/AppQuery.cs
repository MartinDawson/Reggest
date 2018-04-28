using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Reggest.Components.fitness;
using Reggest.Components.graphQl;
using Reggest.Components.qAndA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Reggest.Components.GraphQl
{
    public class AppQuery : QueryGraphType
    {
        public AppQuery(ILoggerFactory loggerFactory, IQuestionService questionService, 
            IFitnessPlanService fitnessPlanService)
        {
            var logger = loggerFactory.CreateLogger<AppQuery>();

            Field<QuestionPayload>()
                .Name("questionByIndex")
                .Argument<IntGraphType>("index", "The index of the question to get, 0 by default")
                .Resolve(c => {
                    var index = c.GetArgument<int?>("index");

                    if (!index.HasValue)
                    {
                        index = 0;
                    }

                    return questionService.GetNextQuestion(index.Value);
                });

            Field<ListGraphType<FitnessPlanPayload>>()
                .Name("fitnessPlans")
                .Argument<FitnessPlanOrderInput>("order", "The ordering for the fitness plans")
                .Resolve(c => {
                    var fitnessPlanOrder = c.GetArgument<FitnessPlanOrder>("order");
                    var fitnessPlans = fitnessPlanService.GetAll().Where(x => x.ParentFitnessPlan == null);

                    if (fitnessPlanOrder?.FitnessPlanIds == null)
                    {
                        return fitnessPlans;
                    }

                    return fitnessPlans.ToList().OrderBy(x => fitnessPlanOrder.FitnessPlanIds.IndexOf(x.Id));
                });
        }
    }
}
