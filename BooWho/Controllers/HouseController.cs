using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Reflection.Metadata.Ecma335;
using BooWho.Models;
using BooWho.Repositories;
using BooWho.Interfaces;
using Microsoft.Data.SqlClient;
using System.Security.Claims;

namespace BooWho.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    [Authorize]
    public class HouseController : ControllerBase
    {
        private readonly IHouseRepository _houseRepository;
        private readonly IHauntRepository _hauntRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public HouseController(
            IHouseRepository houseRepository,
            IHauntRepository hauntRepository,
            IUserProfileRepository userProfileRepository)
        {
            _houseRepository = houseRepository;
            _hauntRepository = hauntRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var tags = _houseRepository.GetAllHouses();
            return Ok(tags);
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userHouses = _houseRepository.GetAllHousesByUser(firebaseUserId);
            if (userHouses == null)
            {
                return NotFound();
            }
            return Ok(userHouses);

        }

        [HttpGet("detail/{id}")]
        public IActionResult GetById(int id)
        {
            var house = _houseRepository.GetHouseById(id);

            if (house == null)
            {
                NotFound();
            }
            return Ok(house);
        }

        [HttpPost()]
        public IActionResult Post(House house)
        {
            UserProfile user = GetCurrentUserProfile();
            house.UserProfileId = user.Id;
            _houseRepository.Add(house);
            return CreatedAtAction(nameof(GetById), new { id = house.Id }, house);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, House house)
        {
            if (id != house.Id)
            {
                return BadRequest();
            }

            _houseRepository.Update(id, house);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _houseRepository.Delete(id);
            return NoContent();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }


    }
}