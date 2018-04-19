using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace Reggest.Components.account
{
    public class RegisterInput : MutationInputGraphType
    {
        public RegisterInput()
        {
            Name = nameof(RegisterInput);

            Field<NonNullGraphType<StringGraphType>>("Username");
            Field<NonNullGraphType<StringGraphType>>("Email");
            Field<NonNullGraphType<StringGraphType>>("Password");
        }
    }
}
