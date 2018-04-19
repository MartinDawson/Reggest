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
    public class RegisterPayload : MutationPayloadGraphType<object, Task<object>>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ILogger _logger;

        public RegisterPayload(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager, ILoggerFactory loggerFactory)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<RegisterPayload>();

            Name = nameof(RegisterPayload);
           
            Field<AccountPayload>("user");
            Field<StringGraphType>("emailConfirmationToken");
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var username = inputs.Get<string>("username");
            var email = inputs.Get<string>("email");
            var password = inputs.Get<string>("password");
            var user = new ApplicationUser
            {
                UserName = username,
                Email = email
            };

            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
            {
                var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                var emailConfirmationToken = System.Web.HttpUtility.UrlEncode(code);

                _logger.LogInformation(3, "User created a new account with password.");

                return new
                {
                    user,
                    emailConfirmationToken
                };
            }

            foreach (var identityError in result.Errors)
            {
                // _validationProvider.AddError("_error", identityError.Description);
            }

            return null;
        }
    }
}
