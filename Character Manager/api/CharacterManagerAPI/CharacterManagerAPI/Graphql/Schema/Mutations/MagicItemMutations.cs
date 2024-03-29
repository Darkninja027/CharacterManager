﻿using CharacterManagerAPI.Graphql.InputTypes;
using CharacterManagerAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using System.Linq.Expressions;

namespace CharacterManagerAPI.Graphql.Schema.Mutations
{
    [ExtendObjectType("Mutations")]
    public class MagicItemMutations
    {
        private IDbContextFactory<CMContext> _context;
        public MagicItemMutations(IDbContextFactory<CMContext> context)
        {
            _context = context;
        }

        public MagicItem CreateMagicItem(MagicItemInput magicItem)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                
                    MagicItem existingMagicItem = db.MagicItems.FirstOrDefault(x => x.Name == magicItem.Name);
                    if (existingMagicItem != null)
                    {
                    throw new GraphQLException(new Error($"An item with the name {magicItem.Name} already exists"));
                    }


                    MagicItem newItem = new MagicItem
                    {
                        Name = magicItem.Name,
                        Description = magicItem.Description,
                        Rarity = magicItem.Rarity,
                        Category = magicItem.Category,
                        Property1 = magicItem.Property1,
                        Property2 = magicItem.Property2,
                        Property3 = magicItem.Property3,
                    };

                    db.MagicItems.Add(newItem);
                    db.SaveChanges();
                    return newItem;
                
            }
        }



        public MagicItem UpdateMagicItem(MagicItemInput magicItem)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                MagicItem test = db.MagicItems.FirstOrDefault(x => x.Id == magicItem.Id);
                if (test == null)
                {
                    throw new GraphQLException(new Error("This item does not exist"));
                }

                if (magicItem.Name != test.Name && db.MagicItems.FirstOrDefault(i => i.Name == magicItem.Name) != null)
                {
                    throw new GraphQLException(new Error("An item with this name already exists"));
                }

                test.Name = magicItem.Name;
                test.Description = magicItem.Description;
                test.Rarity = magicItem.Rarity;
                test.Category = magicItem.Category;
                test.Property1 = magicItem.Property1;
                test.Property2 = magicItem.Property2;
                test.Property3 = magicItem.Property3;

                db.MagicItems.Update(test);
                db.SaveChanges();
                return test;
            }
        }

        public bool DeleteMagicItem(int Id)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                MagicItem item = db.MagicItems.FirstOrDefault(x => x.Id == Id);
                if (item == null)
                {
                    throw new GraphQLException(new Error("The magic item your are attempting to delete does not exist"));
                }
                db.MagicItems.Remove(item);
                db.SaveChanges();
                return db.MagicItems.FirstOrDefault(x => x.Id == Id) != null;
            }
        }

        public bool DeleteAllItems()
        {
            using (CMContext db = _context.CreateDbContext())
            {
                db.RemoveRange(db.MagicItems);
                db.SaveChanges();
                db.Database.ExecuteSqlRaw("DBCC CHECKIDENT (MagicItems, RESEED, 0)");
                return db.MagicItems.Count() == 0;
            }
        }
    }
}
