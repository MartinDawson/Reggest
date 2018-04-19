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
    public class ResetPasswordPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ResetPasswordPayload(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;

            Name = nameof(ResetPasswordPayload);
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var userId = inputs.Get<string>("userId");
            var token = inputs.Get<string>("token");
            var password = inputs.Get<string>("password");
            var user = await _userManager.FindByIdAsync(userId);
            var result = await _userManager.ResetPasswordAsync(user, token, password);

            foreach (var identityError in result.Errors)
            {
                // _validationProvider.AddError("_error", identityError.Description);
            }

            return null;
        }
    }
}
