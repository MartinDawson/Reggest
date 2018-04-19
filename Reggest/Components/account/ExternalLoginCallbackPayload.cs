using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Relay.Types;
using GraphQL.Types;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Reggest.Components.account
{
    public class ExternalLoginCallbackPayload : ObjectGraphType
    {
        public ExternalLoginCallbackPayload()
        {
            Name = nameof(ExternalLoginCallbackPayload);

            Field<AccountPayload>("user", "The existing logged in user");
            Field<StringGraphType>("loginProvider", "The current login provider, i.e facebook, twitter, google etc");
            Field<StringGraphType>("userName", "The new users user name");
        }
    }
}
