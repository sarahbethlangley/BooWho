﻿using BooWho.Models;
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
                       SELECT h.Id, h.Address, h.ImageUrl, h.Notes, h.UserProfileId,
                              up.Name, up.ImageUrl, up.UserTypeId, up.GhostTypeId,
                              ut.Type AS UserType,  
                              gt.Type AS GhostType 
                         
                       FROM House h
                         
                              
                              LEFT JOIN UserProfile up ON h.UserProfileId = up.id
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                              LEFT JOIN GhostType gt ON u.GhostTypeId = gt.id
                       WHERE h.id = @id
                        ";

                    var reader = cmd.ExecuteReader();

                    var houses = new List<House>();

                    while (reader.Read())
                    {
                        houses.Add(new House()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Address = DbUtils.GetString(reader, "Address"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                            Notes = DbUtils.GetString(reader, "Notes"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                Name = DbUtils.GetString(reader, "Name"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                UserType = new UserType()
                                {
                                    Id = reader.GetInt32(reader.GetOrdinal("UserTypeId")),
                                    Type = reader.GetString(reader.GetOrdinal("UserType"))
                                },
                                GhostTypeId = DbUtils.GetInt(reader, "GhostTypeId"),
                                GhostType = new GhostType()
                                {
                                    Id = DbUtils.GetInt(reader, "GhostTypeId"),
                                    Type = DbUtils.GetString(reader, "GhostType"),
                                },
                            },
                            
                            
                        });
                    }

                    reader.Close();

                    return houses;
                }
            }
        }


        public void Add(House house)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
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

        public void Update(House house)
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
                    DbUtils.AddParameter(cmd, "@Id", house.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(House house)
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
                    cmd.Parameters.AddWithValue("@id", house.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }



    }
}