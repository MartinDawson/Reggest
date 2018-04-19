using GraphQL.Relay.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using MailChimp;
using Microsoft.Extensions.Configuration;

namespace Reggest.Components.qAndA
{
    public class SubscribeNewsletterPayload : MutationPayloadGraphType
    {
        private readonly IMailChimpManager _mailChimpManager;
        private readonly IConfiguration _configuration;

        public SubscribeNewsletterPayload(IConfiguration configuration)
        {
            _configuration = configuration;
            _mailChimpManager = new MailChimpManager(_configuration["mailChimp:apiKey"]);

            Name = nameof(SubscribeNewsletterPayload);
        }

        public override object MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var email = inputs.Get<string>("email");
            var reggestId = _configuration["mailChimp:reggestId"];
            var emailParameter = new MailChimp.Helper.EmailParameter { Email = email };
            var answer = _mailChimpManager.Subscribe(reggestId, emailParameter);

            return null;
        }
    }
}
