using System;
using BooWho.Models;
using BooWho.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;
using BooWho.Utils;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;





namespace BooWho.Repositories
{
    public class HauntRepository : BaseRepository, IHauntRepository
    {
        public HauntRepository(IConfiguration configuration) : base(configuration) { }


        public List<Haunt> GetAllHaunts()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT h.Id, h.HouseId, h.Notes AS HauntNotes, h.UserProfileId,
                              hh.Address, hh.ImageUrl AS HouseImage, hh.Notes AS HouseNotes,
                              up.Name AS UserProfileName, up.ImageUrl AS UserPicture, up.UserTypeId, up.GhostTypeId,
                              ut.Type AS UserTypeType,  
                              gt.Type AS GhostTypeType 
                         


                       FROM Haunt h
                         
                              LEFT JOIN House hh ON h.HouseId = hh.id
                              LEFT JOIN UserProfile up ON h.UserProfileId = up.id
                              LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                              LEFT JOIN GhostType gt ON up.GhostTypeId = gt.id
                                ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var haunts = new List<Haunt>();

                        while (reader.Read())
                        {
                            haunts.Add(NewHaunt(reader));


                            
                        }

                        return haunts;
                    }
                }
            }
        }



        public List<Haunt> GetAllHauntsByUser(string fireId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                      SELECT h.Id, h.UserProfileId, h.HouseId, h.Notes AS HauntNotes
                             hh.Address, hh.ImageUrl AS HouseImage, hh.Notes AS HouseNotes,
                             up.Name AS UserProfileName, up.ImageUrl AS UserPicture, up.UserTypeId, up.GhostTypeId,
                             ut.Type AS UserTypeType,  
                             gt.Type AS GhostTypeType 
                        FROM Haunt h
                              LEFT JOIN UserProfile up ON h.UserProfileId = up.id
                              LEFT JOIN House hh ON h.HouseId = hh.id
                              LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                              LEFT JOIN GhostType gt ON h.GhostTypeId = gt.id
                        WHERE u.FirebaseUserId = @fireId
                         ";

                    cmd.Parameters.AddWithValue("@fireId", fireId);
                    var reader = cmd.ExecuteReader();

                    var haunts = new List<Haunt>();

                    while (reader.Read())
                    {
                        haunts.Add(NewHaunt(reader));
                    }

                    reader.Close();

                    return haunts;
                }
            }
        }

        public Haunt GetHauntsById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT 

                                h.Id, h.UserProfileId, h.GhostTypeId, h.HouseId, h.Notes AS HauntNotes,
                                hh.Address, hh.ImageUrl AS HouseImage, hh.Notes AS HouseNotes,
                                up.Name AS UserProfileName, up.ImageUrl AS UserPicture, UserTypeId,
                                ut.Type AS UserTypeType,
                                gt.Type AS GhostTypeType

                           FROM Haunt h
                                
                                LEFT JOIN UserProfile up on h.UserProfileId = up.Id
                                LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                                lEFT JOIN GhostType gt on h.GhostTypeId = gt.Id
                                LEFT JOIN House hh on h.HouseId = hh.Id
                                WHERE h.Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        Haunt haunt = null;
                        if (reader.Read())
                        {
                            haunt = NewHaunt(reader);
                        }

                        return haunt;

                    }
                }
            }
        }

        public void Add(Haunt haunt)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Haunt (UserProfileId, HouseId, Notes)
                                        OUTPUT INSERTED.ID
                                        VALUES (@UserProfileId, @HouseId, @Notes)";
                    DbUtils.AddParameter(cmd, "@UserProfileId", haunt.UserProfileId);
                    DbUtils.AddParameter(cmd, "@HouseId", haunt.HouseId);
                    DbUtils.AddParameter(cmd, "@Notes", haunt.Notes);

                    haunt.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(int id, Haunt haunt)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Haunt
                           SET UserProfileId = @UserProfileId,
                               HouseId = @HouseId,
                               Notes = @Notes
                               
                            
                         WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@UserProfileId", haunt.UserProfileId);
                    DbUtils.AddParameter(cmd, "@HouseId", haunt.HouseId);
                    DbUtils.AddParameter(cmd, "@Notes", haunt.Notes);
                    DbUtils.AddParameter(cmd, "@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM Haunt
                        WHERE Id = @id
                    ";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public Haunt NewHaunt(SqlDataReader reader)
        {
            return new Haunt
            {
                Id = DbUtils.GetInt(reader, "Id"),
                HouseId = DbUtils.GetInt(reader, "HouseId"),
                House = new House
                {

                    Address = DbUtils.GetString(reader, "Address"),
                    ImageUrl = DbUtils.GetString(reader, "HouseImage"),
                    Notes = DbUtils.GetString(reader, "HouseNotes"),

                },
                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                UserProfile = new UserProfile
                {
                   
                    Name = DbUtils.GetString(reader, "UserProfileName"),
                    ImageUrl = DbUtils.GetString(reader, "UserPicture"),
                    
                },
                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                UserType = new UserType
                {
                    Type = DbUtils.GetString(reader, "UserTypeType"),
                },
                GhostTypeId = DbUtils.GetNullableInt(reader, "GhostTypeId"),
                GhostType = !DbUtils.IsDbNull(reader, "GhostTypeId") ? new GhostType()
                {
                    Id = DbUtils.GetInt(reader, "GhostTypeId"),
                    Type = DbUtils.GetString(reader, "GhostTypeType"),
                } : null,
                
                Notes = DbUtils.GetString(reader, "HauntNotes")

            };
        }

    }
}
