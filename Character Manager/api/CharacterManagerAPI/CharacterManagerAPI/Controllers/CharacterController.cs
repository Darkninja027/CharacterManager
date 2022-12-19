using CharacterManagerAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CharacterManagerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class CharacterController : ControllerBase
    {
        private CMContext _context;

        public CharacterController(CMContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Character>>> GetCharacters()
        {
            return Ok(await _context.Characters.ToListAsync());

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Character>> GetCharacter(int id)
        {
            var character = await _context.Characters.FindAsync(id);
            if (character == null)
            {
                return BadRequest("Character was not found");
            }
            return Ok(character);
        }


        [HttpPost]
        public async Task<ActionResult<List<Character>>> AddCharacter(Character character)
        {
            _context.Characters.Add(character);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult<List<Character>>> Update(Character updatedCharacter)
        {
            var character = await _context.Characters.FindAsync(updatedCharacter.Id);
            if(character == null)
            {
                return BadRequest("Character not found");
            }
            character.Name = updatedCharacter.Name;
            character.Level = updatedCharacter.Level;

            await _context.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            var character = await _context.Characters.Where(x => x.Id == id).FirstOrDefaultAsync();
            if(character == null)
            {
                return BadRequest("Character not found");
            }
            _context.Characters.Remove(character);
            _context.SaveChanges();
            return Ok();
        }
    }
}
