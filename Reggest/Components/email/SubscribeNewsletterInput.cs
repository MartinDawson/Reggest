using GraphQL.Relay.Types;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class SubscribeNewsletterInput : MutationInputGraphType
    {
        public SubscribeNewsletterInput()
        {
            Name = nameof(SubscribeNewsletterInput);

            Field<NonNullGraphType<StringGraphType>>("email");
            Field<NonNullGraphType<StringGraphType>>("recaptcha");
        }
    }
}
