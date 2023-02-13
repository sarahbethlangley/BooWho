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