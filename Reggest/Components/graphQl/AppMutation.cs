using GraphQL.Relay.Types;
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
        }
    }
}
