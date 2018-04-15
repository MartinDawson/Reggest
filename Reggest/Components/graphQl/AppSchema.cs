using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.GraphQl
{
    public class AppSchema : Schema
    {
        public AppSchema(Func<Type, IGraphType> resolveType) : base(resolveType)
        {
            var query = (AppQuery)resolveType(typeof(AppQuery));
            var mutation = (AppMutation)resolveType(typeof(AppMutation));

            Query = query;
            // Mutation = mutation;
        }
    }
}
