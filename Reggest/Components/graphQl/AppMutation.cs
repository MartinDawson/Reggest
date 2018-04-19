using GraphQL.Relay.Types;
using Reggest.Components.account;
using Reggest.Components.qAndA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.GraphQl
{
    public class AppMutation : MutationGraphType
    {
        public AppMutation()
        {
            Mutation<SubmitAnswerInput, SubmitAnswerPayload>("submitAnswer");
            Mutation<SubscribeNewsletterInput, SubscribeNewsletterPayload>("subscribeNewsletter");
            Mutation<RegisterInput, RegisterPayload>("register");
            Mutation<LoginInput, LoginPayload>("login");
            Mutation<ExternalLoginConfirmationInput, ExternalLoginConfirmationPayload>("externalLoginConfirmation");
            Field<LogoutPayload>("logout", resolve: c => ((LogoutPayload)c.ReturnType).MutateAndGetPayload(null, c));
            Mutation<GenerateResetPasswordTokenInput, GenerateResetPasswordTokenPayload>("generateResetPasswordToken");
            Mutation<ResetPasswordInput, ResetPasswordPayload>("resetPassword");
        }
    }
}
