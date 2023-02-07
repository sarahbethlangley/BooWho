using System.Collections.Generic;
using BooWho.Models;
using Microsoft.Extensions.Hosting;

namespace BooWho.Interfaces


{
    public interface IHauntRepository
    {
        List<Haunt> GetAllHaunts();
        List<Haunt> GetAllHauntsByUser(string fireId);
        object GetHauntsById (int id);
        void Add(Haunt haunt);
        void Update(Haunt haunt);
        void Delete(int id);
        
    }
}
