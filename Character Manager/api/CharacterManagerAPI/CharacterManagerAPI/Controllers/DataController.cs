using CharacterManagerAPI.Models;
using CharacterManagerAPI.Seeds;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace CharacterManagerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class DataController: ControllerBase
    {
        private CMContext _context;

        public DataController(CMContext context)
        {
            _context = context;
        }

        [HttpPost("SeedRaces")]
        public async Task<ActionResult<List<Race>>> SeedRaces()
        {
            var races = await _context.Races.AnyAsync();
            if(!races)
            {
                Races.SeedHumans(_context);

            }
            //_context.Database.ExecuteSqlRaw("DBCC CHECKIDENT (Characters, RESEED, 0)");
            //_context.Database.ExecuteSqlRaw("insert into characters values ('Bont', 3)");
            //_context.SaveChangesAsync();
            //if (_context.Races.Any())
            //{
            //    return BadRequest();
            //}
            return Ok();
        }
    }
}
