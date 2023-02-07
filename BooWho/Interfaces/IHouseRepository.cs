﻿using BooWho.Models;
using System.Collections.Generic;
using Microsoft.Extensions.Hosting;


namespace BooWho.Interfaces


{
    public interface IHouseRepository
    {
        List<House> GetAllHouses();
        void Add(House house);
        void Update(House house);
        void Delete(House house);
        
    }
}
