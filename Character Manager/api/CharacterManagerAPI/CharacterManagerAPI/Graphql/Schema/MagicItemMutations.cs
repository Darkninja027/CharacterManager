﻿using CharacterManagerAPI.Graphql.InputTypes;
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

        public MagicItem CreateMagicItem(MagicItemInput magicItem)
        {
            using (CMContext db = _context.CreateDbContext())
            {
                try
                {
                    MagicItem existingMagicItem = db.MagicItems.FirstOrDefault(x => x.Name == magicItem.Name);
                    if (existingMagicItem != null)
                    {
                        throw new Exception($"An item with the name {magicItem.Name} already exists");
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
                catch(Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
        }

        public MagicItem UpdateMagicItem(int id, MagicItemInput item)
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
                db.Database.ExecuteSqlRaw(("DBCC CHECKIDENT (MagicItems, RESEED, 0)"));
                return db.MagicItems.Count() == 0;
            }
        }
    }
}