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
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT h.Id, h.HouseId, h.Notes, h.UserProfileId,
                              hh.Address, hh.ImageUrl, hh.Notes,
                              up.Name, up.ImageUrl, up.UserTypeId, up.GhostTypeId,
                              ut.Type AS UserType,  
                              gt.Type AS GhostType 
                         


                       FROM Haunt h
                         
                              LEFT JOIN House hh ON h.HouseId = hh.id
                              LEFT JOIN UserProfile up ON h.UserProfileId = up.id
                              LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                              LEFT JOIN GhostType gt ON up.GhostTypeId = gt.id
                                ";

                    var reader = cmd.ExecuteReader();

                    var haunts = new List<Haunt>();

                    while (reader.Read())
                    {
                        haunts.Add(new Haunt()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            HouseId = DbUtils.GetInt(reader, "HouseId"),
                            House = new House()
                            {
                                Id = DbUtils.GetInt(reader, "HouseId"),
                                Address = DbUtils.GetString(reader, "Address"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Notes = DbUtils.GetString(reader, "Notes"),
                               
                            },
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

                    return haunts;
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
                      SELECT h.Id, h.UserProfileId, h.HouseId, h.Notes
                             hh.Address, hh.ImageUrl, hh.Notes,
                             up.Name, up.ImageUrl, up.UserTypeId, up.GhostTypeId,
                             ut.Type AS UserType,  
                             gt.Type AS GhostType 
                        FROM Haunt h
                              LEFT JOIN UserProfile up ON h.UserProfileId = up.id
                              LEFT JOIN House hh ON h.HouseId = hh.id
                              LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                              LEFT JOIN GhostType gt ON up.UserTypeId = gt.id
                        WHERE u.FirebaseUserId = @fireId
                         ";

                    cmd.Parameters.AddWithValue("@fireId", fireId);
                    var reader = cmd.ExecuteReader();

                    var haunts = new List<Haunt>();

                    while (reader.Read())
                    {
                        haunts.Add(new Haunt()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
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
                            HouseId = DbUtils.GetInt(reader, "HouseId"),
                            House = new House()
                            {
                                Id = DbUtils.GetInt(reader, "HouseId"),
                                Address = DbUtils.GetString(reader, "Address"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Notes = DbUtils.GetString(reader, "Notes"),

                            },
                            Notes = DbUtils.GetString(reader, "Notes")

                        });
                    }

                    reader.Close();

                    return haunts;
                }
            }
        }

        public object GetHauntsById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = HauntQuery + " WHERE q.id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);

                    Haunt haunt = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        haunt = NewHaunt(reader);
                    }
                    reader.Close();

                    return haunt;
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
                                        VALUES (@UserProfileId, @HouseId, @NotesId)";
                    DbUtils.AddParameter(cmd, "@UserProfileId", haunt.UserProfileId);
                    DbUtils.AddParameter(cmd, "@HouseId", haunt.HouseId);
                    DbUtils.AddParameter(cmd, "@Notes", haunt.Notes);

                    haunt.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Haunt haunt)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Haunt
                           SET UserProfileId = @UserProfileId
                               HouseId = @Address,
                               Notes = @Notes,
                               ImageUrl = @ImageUrl,
                            
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@UserProfileId", haunt.UserProfileId);
                    DbUtils.AddParameter(cmd, "@HouseId", haunt.HouseId);
                    DbUtils.AddParameter(cmd, "@Notes", haunt.Notes);
                    DbUtils.AddParameter(cmd, "@Id", haunt.Id);

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

        private string HauntQuery
        {
            get
            {
                return @"SELECT h.Id, h.UserProfileId, h.HouseId, h.Notes,
                                hh.Address, hh.ImageUrl, hh.Notes,
                                up.Name AS UserProfileName, up.ImageUrl, up.UserTypeId, up.GhostTypeId,
                                ut.Type AS UserType,
                                gt.Type AS GhostType
                           FROM Haunt h
                                LEFT JOIN UserProfile up on h.UserProfileId = up.Id
                                LEFT JOIN House hh on up.UserTypeId = hh.Id
                                LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                                LEFT JOIN GhostType gt on up.UserTypeId = gt.Id";
            }
        }

        private Haunt NewHaunt(SqlDataReader reader)
        {
            return new Haunt()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                UserProfile = new UserProfile()
                {
                    Id = DbUtils.GetInt(reader, "UserProfileId"),
                    Name = DbUtils.GetString(reader, "UserProfileName"),
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
                HouseId = DbUtils.GetInt(reader, "HouseId"),
                House = new House()
                {
                    Id = DbUtils.GetInt(reader, "HouseId"),
                    Address = DbUtils.GetString(reader, "Address"),
                    ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                    Notes = DbUtils.GetString(reader, "Notes"),

                },
                Notes = DbUtils.GetString(reader, "Notes")

            };
        }



    }
}
