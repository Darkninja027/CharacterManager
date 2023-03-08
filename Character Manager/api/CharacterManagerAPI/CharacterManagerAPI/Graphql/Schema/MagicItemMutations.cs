using CharacterManagerAPI.Graphql.InputTypes;
using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema
{
    [ExtendObjectType("Mutations")]
    public class MagicItemMutations
    {
        private IDbContextFactory<CMContext> _context;
        public MagicItemMutations(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public MagicItem CreateItem(MagicItemInput item)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                MagicItem test = db.MagicItems.FirstOrDefault(x => x.Name == item.Name);
                if (test != null)
                {
                    throw new Exception($"An item with the name {item.Name} already exists");
                }

                MagicItem newItem = new MagicItem
                {
                    Name = item.Name,
                    Description = item.Description
                };
                db.MagicItems.Add(newItem);
                db.SaveChanges();
                return newItem;
            }
        }

        public MagicItem UpdateItem(int id, MagicItemInput item)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                MagicItem test = db.MagicItems.FirstOrDefault(x => x.Id == id);
                if (test == null)
                {
                    throw new Exception("This item does not exist");
                }

                test.Name = item.Name;
                test.Description = item.Description;

                db.MagicItems.Update(test);
                db.SaveChanges();
                return test;
            }
        }

        public bool DeleteAllItems()
        {
            using(CMContext db = _context.CreateDbContext())
            {
                db.RemoveRange(db.MagicItems);
                db.SaveChanges();
                db.Database.ExecuteSqlRaw(("DBCC CHECKIDENT (Items, RESEED, 0)"));
                return db.MagicItems.Count() == 0;
            }
        }
    }
}
