using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace Reggest.Components.account
{
    public class ExternalLoginConfirmationInput : MutationInputGraphType
    {
        public ExternalLoginConfirmationInput()
        {
            Name = nameof(ExternalLoginConfirmationInput);

            Field<NonNullGraphType<StringGraphType>>("userName");
        }
    }
}
