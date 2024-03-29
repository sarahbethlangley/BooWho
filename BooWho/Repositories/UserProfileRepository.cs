﻿using BooWho.Models;
using BooWho.Interfaces;
using Microsoft.Extensions.Configuration;
using BooWho.Utils;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;


namespace BooWho.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }


        public List<UserProfile> GetAllUsers()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.Name, up.ImageUrl, up.Hobbies,
                               up.UserTypeId,                             
                               ut.Type AS UserTypeName

                        

                        FROM UserProfile up
                        LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                        
                        
                    ";

                    using SqlDataReader reader = cmd.ExecuteReader();
                    {
                        var profiles = new List<UserProfile>();

                        while (reader.Read())
                        {
                            profiles.Add(new UserProfile
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                Hobbies = DbUtils.GetString(reader, "Hobbies"),
                                UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                                UserType = new UserType()
                                {

                                    Type = DbUtils.GetString(reader, "UserTypeName"),
                                }

                            });

                        }
                        return profiles;


                    }
                }
            }
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, Up.FirebaseUserId, up.Name AS UserProfileName, up.Email, up.Hobbies, up.UserTypeId,
                               ut.Type AS UserTypeType, up.GhostTypeId, gt.Type as GhostType
                          FROM UserProfile up
                               LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                               LEFT JOIN GhostType gt on up.GhostTypeId = gt.Id
                         WHERE FirebaseUserId = @FirebaseuserId";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Name = DbUtils.GetString(reader, "UserProfileName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Hobbies = DbUtils.GetString(reader, "Hobbies"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Type = DbUtils.GetString(reader, "UserTypeType"),
                            },
                            GhostTypeId = DbUtils.GetNullableInt(reader, "GhostTypeId"),
                            GhostType = !DbUtils.IsDbNull(reader, "GhostTypeId") ? new GhostType()
                            {
                                Id = DbUtils.GetInt(reader, "GhostTypeId"),
                                Type = DbUtils.GetString(reader, "GhostType"),
                            }: null

                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FirebaseUserId, Name, Email, UserTypeId, GhostTypeId, Hobbies)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @Name, @Email, @UserTypeId, @GhostTypeId, @Hobbies)";
                    DbUtils.AddParameter(cmd, "@FirebaseUserId", userProfile.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@Name", userProfile.Name);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@UserTypeId", userProfile.UserTypeId);
                    DbUtils.AddParameter(cmd, "@GhostTypeId", userProfile.GhostTypeId);
                    DbUtils.AddParameter(cmd, "@Hobbies", userProfile.Hobbies);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(UserProfile profile)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile
                        SET Name = @Name,
                            Email = @Email,
                            UserTypeId = @UserTypeId,
                            GhostTypeId = @GhostTypeId,
                            ImageUrl = @ImageUrl
                        WHERE Id = @id
                    ";

                    DbUtils.AddParameter(cmd, "@Name", profile.Name);
                    DbUtils.AddParameter(cmd, "@Email", profile.Email);
                    DbUtils.AddParameter(cmd, "@UserTypeId", profile.UserTypeId);
                    DbUtils.AddParameter(cmd, "@GhostTypeId", profile.GhostTypeId);
                    DbUtils.AddParameter(cmd, "@ImageUrl", profile.ImageUrl);
                    DbUtils.AddParameter(cmd, "@id", profile.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(UserProfile userProfile)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM userProfile
                        WHERE Id = @id
                    ";
                    cmd.Parameters.AddWithValue("@id", userProfile.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
