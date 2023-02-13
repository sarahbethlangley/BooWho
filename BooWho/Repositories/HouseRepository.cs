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
    public class HouseRepository : BaseRepository, IHouseRepository
    {
        public HouseRepository(IConfiguration configuration) : base(configuration) { }


        public List<House> GetAllHouses()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT hh.Id, hh.Address, hh.ImageUrl AS HouseImage, hh.Notes AS HouseNotes, hh.UserProfileId,
                              up.Name AS UserProfileName, up.ImageUrl AS UserPicture, up.UserTypeId, 
                              ut.Type AS UserTypeType
                              
                         
                       FROM House hh
                         
                              
                              LEFT JOIN UserProfile up ON hh.UserProfileId = up.id
                              LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                              
                       
                        ";
                    
                    using SqlDataReader reader = cmd.ExecuteReader();

                    

                        var houses = new List<House>();

                        while (reader.Read())
                        {
                            houses.Add(new House()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Address = DbUtils.GetString(reader, "Address"),
                                ImageUrl = DbUtils.GetString(reader, "HouseImage"),
                                Notes = DbUtils.GetString(reader, "HouseNotes"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                UserProfile = new UserProfile()
                                {
                                    Name = DbUtils.GetString(reader, "UserProfileName"),
                                    ImageUrl = DbUtils.GetString(reader, "UserPicture"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                    UserType = new UserType()
                                    {
                                        Type = DbUtils.GetString(reader, "UserTypeType"),
                                    },
                                    
                                }


                            });
                        }

                        return houses;

                    }
            }
        }

        public List<House> GetAllHousesByUser(string fireId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                      SELECT hh.Id, hh.Address, hh.ImageUrl AS HouseImage, hh.Notes AS HouseNotes, hh.UserProfileId,
                              up.Name AS UserProfileName, up.ImageUrl AS UserPicture, up.UserTypeId, up.GhostTypeId,
                              ut.Type AS UserTypeType,  
                              gt.Type AS GhostTypeType
                         
                       FROM House hh
                         
                              
                              LEFT JOIN UserProfile up ON hh.UserProfileId = up.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                              LEFT JOIN GhostType gt ON u.GhostTypeId = gt.id
                     
                        WHERE u.FirebaseUserId = @fireId
                         ";

                    cmd.Parameters.AddWithValue("@fireId", fireId);
                    var reader = cmd.ExecuteReader();

                    var houses = new List<House>();

                    while (reader.Read())
                    {
                        houses.Add(new House()
                        
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Address = DbUtils.GetString(reader, "Address"),
                            ImageUrl = DbUtils.GetString(reader, "HouseImage"),
                            Notes = DbUtils.GetString(reader, "HouseNotes"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Name = DbUtils.GetString(reader, "Name"),
                                ImageUrl = DbUtils.GetString(reader, "UserPicture"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                UserType = new UserType()
                                {
                                    Type = reader.GetString(reader.GetOrdinal("UserTypeType")),
                                },
                                GhostTypeId = DbUtils.GetInt(reader, "GhostTypeId"),
                                GhostType = new GhostType()
                                {
                                    Type = DbUtils.GetString(reader, "GhostTypeType"),
                                },
                            },

                        });
                    }

                    reader.Close();

                    return houses;
                }
            }
        }

        public House GetHouseById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT hh.Id, hh.Address, hh.ImageUrl AS HouseImage, hh.Notes AS HouseNotes
                        FROM House hh
                        WHERE hh.Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {


                        House house = null;

                        if (reader.Read())
                        {
                            house = new House()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Address = DbUtils.GetString(reader, "Address"),
                                ImageUrl = DbUtils.GetString(reader, "HouseImage"),
                                Notes = DbUtils.GetString(reader, "HouseNotes")


                            };
                        }
                            return house;

                    }

                }
            }

         }
                
                    
                
            
        


        public void Add(House house)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO House (UserProfileId, Address, ImageUrl, Notes)
                                        OUTPUT INSERTED.ID
                                        VALUES (@UserProfileId, @Address, @ImageUrl, @Notes)";
                    DbUtils.AddParameter(cmd, "@UserProfileId", house.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Address", house.Address);
                    DbUtils.AddParameter(cmd, "@ImageUrl", house.ImageUrl);
                    DbUtils.AddParameter(cmd, "@Notes", house.Notes);

                    house.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(int id, House house)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE House
                           SET UserProfileId = @UserProfileId
                               Address = @Address,
                               Notes = @Notes,
                               ImageUrl = @ImageUrl,
                            
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@UserProfileId", house.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Address", house.Address);
                    DbUtils.AddParameter(cmd, "@Notes", house.Notes);
                    DbUtils.AddParameter(cmd, "@ImageUrl", house.ImageUrl);
                    DbUtils.AddParameter(cmd, "@Id", id);

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
                        DELETE FROM House
                        WHERE Id = @id
                    ";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }



    }
}