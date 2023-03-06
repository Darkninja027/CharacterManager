using CharacterManagerAPI.Graphql.InputTypes;
using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace CharacterManagerAPI.Graphql.Schema
{
    public class Mutations
    {
        private readonly IDbContextFactory<CMContext> _context;
        public Mutations(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }


        

    }
}
