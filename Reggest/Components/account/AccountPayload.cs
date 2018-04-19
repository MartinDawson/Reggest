using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Relay.Types;
using GraphQL.Types.Relay.DataObjects;

namespace Reggest.Components.account
{
    public class AccountPayload : GraphQl.NodeGraphType<ApplicationUser>
    {
        public AccountPayload()
        {
            Name = nameof(ApplicationUser);

            Id("userId", x => x.Id);
            Field(x => x.UserName);
            Field(x => x.Email);
            Field(x => x.EmailConfirmed);
        }

        public override ApplicationUser GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
