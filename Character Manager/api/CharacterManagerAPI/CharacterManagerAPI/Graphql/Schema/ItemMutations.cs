using CharacterManagerAPI.Graphql.InputTypes;
using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Graphql.Schema
{
    [ExtendObjectType("Mutations")]
    public class ItemMutations
    {
        private IDbContextFactory<CMContext> _context;
        public ItemMutations(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public Item CreateItem(ItemInput item)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                Item test = db.Items.FirstOrDefault(x => x.Name == item.Name);
                if (test != null)
                {
                    throw new Exception($"An item with the name {item.Name} already exists");
                }

                Item newItem = new Item
                {
                    Name = item.Name,
                    Description = item.Description
                };
                db.Items.Add(newItem);
                db.SaveChanges();
                return newItem;
            }
        }

        public Item UpdateItem(int id, ItemInput item)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                Item test = db.Items.FirstOrDefault(x => x.Id == id);
                if (test == null)
                {
                    throw new Exception("This item does not exist");
                }

                test.Name = item.Name;
                test.Description = item.Description;

                db.Items.Update(test);
                db.SaveChanges();
                return test;
            }
        }
    }
}
