using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Reggest.Components.account;
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
            IFitnessPlanService fitnessPlanService, SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
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

            Field<AccountPayload>()
                .Name("user")
                .ResolveAsync(async c => {
                    var context = await c.UserContext.As<Task<Context>>();

                    return context.CurrentUser;
                });

            Field<ExternalLoginCallbackPayload>()
              .Name("externalLoginCallback")
              .ResolveAsync(async c =>
              {
                  var info = await signInManager.GetExternalLoginInfoAsync();
                  if (info == null)
                  {
                     // validationProvider.AddError("_error", "Could not get external login information");

                      return null;
                  }

                    // Sign in the user with this external login provider if the user already has a login.
                    var result = await signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, true);
                  ApplicationUser user = null;

                  if (result.Succeeded)
                  {
                      user = await signInManager.UserManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);

                      logger.LogInformation(5, $"User logged in with {info.LoginProvider} provider.");
                  }
                  var userName = info.Principal.FindFirstValue(ClaimTypes.Name);

                    // If the user does not have an account, then ask the user to create an account.
                    return new
                  {
                      user,
                      loginProvider = info.LoginProvider,
                      userName
                  };
              });


            Field<BooleanGraphType>()
                .Name("confirmEmail")
                .Argument<NonNullGraphType<StringGraphType>>("userId", "The id of the user")
                .Argument<NonNullGraphType<StringGraphType>>("token", "The unique code to verify the email")
                .ResolveAsync(async c =>
                {
                    var userId = c.GetArgument<string>("userId");
                    var token = c.GetArgument<string>("token");

                    var user = await userManager.FindByIdAsync(userId);

                    if (user == null)
                    {
                       // validationProvider.AddError("_error", "No user could be found");

                        return null;
                    }
                    var result = await userManager.ConfirmEmailAsync(user, token);

                    if (!result.Succeeded)
                    {
                      //  validationProvider.AddError("_error", "Could not confirm your email. Please try again.");
                    }

                    return null;
                });

            Field<ListGraphType<LoginProvidersPayload>>()
                .Name("loginProviders")
                .ResolveAsync(async c =>
                {
                    var providers = await signInManager.GetExternalAuthenticationSchemesAsync();

                    return providers;
                });
        }
    }
}
