using GraphQL.Relay.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Types;
using MailChimp;
using Microsoft.Extensions.Configuration;
using MailChimp.Net;
using MailChimp.Net.Interfaces;
using MailChimp.Net.Models;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using Reggest.Components.email;

namespace Reggest.Components.qAndA
{
    public class SubscribeNewsletterPayload : MutationPayloadGraphType<Task<object>>
    {
        private readonly IMailChimpManager _mailChimpManager;
        private readonly IConfiguration _configuration;

        public SubscribeNewsletterPayload(IConfiguration configuration)
        {
            _configuration = configuration;
            _mailChimpManager = new MailChimpManager(_configuration["mailChimp:apiKey"]);

            Name = nameof(SubscribeNewsletterPayload);
        }

        public override async Task<object> MutateAndGetPayload(MutationInputs inputs, ResolveFieldContext<object> context)
        {
            var recaptcha = inputs.Get<string>("recaptcha");
            var email = inputs.Get<string>("email");
            var listId = _configuration["mailChimp:reggestId"];
            var parameters = new Dictionary<string, string> {
                { "secret", _configuration["recaptcha:secret"] },
                { "response", recaptcha }
            };
            var encodedContent = new FormUrlEncodedContent(parameters);

            using (var client = new HttpClient())
            {
                var response = await client.PostAsync(_configuration["recaptcha:verifyUrl"], encodedContent);
                var recpatcha = await response.Content.ReadAsAsync<Recaptcha>();

                response.EnsureSuccessStatusCode();

                if (!recpatcha.Success) return null;
            }

            var member = new Member { EmailAddress = email, StatusIfNew = Status.Subscribed };

            await _mailChimpManager.Members.AddOrUpdateAsync(listId, member);

            return null;
        }
    }
}
