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
    public class ExternalLoginConfirmationPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger _logger;

        public ExternalLoginConfirmationPayload(
            SignInManager<ApplicationUser> signInManager, 
            ILoggerFactory loggerFactory, 
            UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _logger = loggerFactory.CreateLogger<ExternalLoginConfirmationPayload>();

            Name = nameof(ExternalLoginConfirmationPayload);
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var userName = inputs.Get<string>("userName");

            // Get the information about the user from the external login provider
            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
              //  _validationProvider.AddError("_error", "Unsuccessful login with service.");

                return null;
            }
            var email = info.Principal.FindFirstValue(ClaimTypes.Email);

            var user = new ApplicationUser
            {
                UserName = userName,
                Email = email
            };

            var result = await _userManager.CreateAsync(user);
 
            if (result.Succeeded)
            {
                result = await _userManager.AddLoginAsync(user, info);

                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, true);

                    _logger.LogInformation(6, $"User created an account using {info.LoginProvider} provider.");
                }
            }

            foreach (var identityError in result.Errors)
            {
          //      _validationProvider.AddError("_error", identityError.Description);
            }

            return null;
        }
    }
}
