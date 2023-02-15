SELECT up.Id, up.FirebaseUserId, up.Name AS UserProfileName, up.Email, up.ImageUrl, up.Hobbies,
                               up.UserTypeId, up.GhostTypeId,
                               ut.Type AS UserTypeName,  
                               gt.Type AS GhostTypeName

                        

                        FROM UserProfile up
                        LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                        LEFT JOIN GhostType gt on up.GhostTypeId = gt.Id