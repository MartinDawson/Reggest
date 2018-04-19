using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
    public class GenerateResetPasswordTokenPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public GenerateResetPasswordTokenPayload(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;

            Name = nameof(GenerateResetPasswordTokenPayload);

            Field<AccountPayload>("user");
            Field<StringGraphType>("passwordResetToken");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var email = inputs.Get<string>("email");

            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                // throw "_error", "We couldn't find that email address");
                return null;
            }

            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            var passwordResetToken = System.Web.HttpUtility.UrlEncode(code);

            return new
            {
                user,
                passwordResetToken
            };
        }
    }
}
