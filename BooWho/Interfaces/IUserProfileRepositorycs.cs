using BooWho.Models;
using System.Collections.Generic;

namespace BooWho.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAllUsers();
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        void Add(UserProfile userProfile);
        void Delete(UserProfile userProfile);
        void Update(UserProfile userProfile);
       
    }
}