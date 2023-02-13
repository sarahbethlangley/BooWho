using System.Collections.Generic;
using BooWho.Models;
using Microsoft.Extensions.Hosting;

namespace BooWho.Interfaces


{
    public interface IHauntRepository
    {
        List<Haunt> GetAllHaunts();
        List<Haunt> GetAllHauntsByUser(string fireId);
        Haunt GetHauntsById (int id);
        void Add(Haunt haunt);
        void Update(int id, Haunt haunt);
        void Delete(int id);
        
    }
}
