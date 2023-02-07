using System.Collections.Generic;
using BooWho.Models;
using Microsoft.Extensions.Hosting;

namespace BooWho.Interfaces


{
    public interface IHauntRepository
    {
        List<Haunt> GetAllHaunts();
        List<Haunt> GetAllHauntsByUser(string fireId);
        void Add(Haunt haunt);
        void Update(Haunt haunt);
        void Delete(Haunt haunt);
        
    }
}
