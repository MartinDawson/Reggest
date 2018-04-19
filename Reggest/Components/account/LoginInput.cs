using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types;

namespace Reggest.Components.account
{
    public class LoginInput : MutationInputGraphType
    {
        public LoginInput()
        {
            Name = nameof(LoginInput);

            Field<NonNullGraphType<StringGraphType>>("Username");
            Field<NonNullGraphType<StringGraphType>>("Password");
            Field<BooleanGraphType>("RememberMe");
        }
    }
}
