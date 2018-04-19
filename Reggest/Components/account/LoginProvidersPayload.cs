using GraphQL.Types;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;
using Microsoft.AspNetCore.Authentication;

namespace Reggest.Components.account
{
    public class LoginProvidersPayload : ObjectGraphType<AuthenticationScheme>
    {
        public LoginProvidersPayload()
        {
            Name = "LoginProvider";

            Field(x => x.Name);
            Field(x => x.DisplayName);
        }
    }
}
