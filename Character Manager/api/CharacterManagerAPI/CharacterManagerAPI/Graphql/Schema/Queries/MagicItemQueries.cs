using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema.Queries
{
    [ExtendObjectType("Query")]
    public class MagicItemQueries
    {
        private readonly IDbContextFactory<CMContext> _context;

        public MagicItemQueries(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public IEnumerable<MagicItem> GetMagicItems()
        {
            using (CMContext db = _context.CreateDbContext())
            {
                var Items = db.MagicItems.ToList();
                return Items;
            }
        }

        public MagicItem GetMagicItem(int id)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                MagicItem magicItem = db.MagicItems.FirstOrDefault(x => x.Id == id);
                if (magicItem == null)
                {
                    throw new GraphQLException(new Error("The magic item does not exist"));
                }
                return magicItem;
            }
        }
    }
}
