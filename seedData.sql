INSERT INTO UserType ([Type]) values ('Family');
INSERT INTO UserType ([Type]) values ('Ghost');


INSERT INTO GhostType ([Type]) values ('Spirit');
INSERT INTO GhostType ([Type]) values ('Poltergeist');
INSERT INTO GhostType ([Type]) values ('Banshee');
INSERT INTO GhostType ([Type]) values ('Demon');
INSERT INTO GhostType ([Type]) values ('Phantom');
INSERT INTO GhostType ([Type]) values ('Ghoul');
INSERT INTO GhostType ([Type]) values ('Spook');
INSERT INTO GhostType ([Type]) values ('Dead Witch');


INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('X2LVlRYljZasoz3GDWnruvzLckk1', 1, null, 'borden@axelovers.com', 'Borden Family', 'enjoys axe throwing', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('tDU7gne6dFdt8eooHAfjMWLdHim2', 1, null, 'sanchez@family.com', 'Sanchez Family', 'smokes cigars', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('SHMWKQBjOIca3ZsRiqe31GkG30n1', 1, null, 'smith@family.com', 'Smith Family', 'bike riding and drinking fancy beers', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('qD9eU9NAdIcN4si1PQBcE0D5qwo1', 1, null, 'blankenship@family.com', 'Blankenship Family', 'reading, writing, arithmatic', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('5fUZBzHx0RbNglQnZjUcuud7iiF3', 1, null, 'anders@family.com', 'Anders Family', 'such cool things', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('LNWARMLXStUwP83UHk3a0YsGqOM2', 2, 1, 'joe@ghost.com', 'Carpet Joe', 'throwing hammers and fits', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('0Nf6Sa83rRZIFVsy2EY99E5jrzO2', 2, 2, 'anthony@ghost.com', 'Agonized Anthony', 'wailing', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('NA0h4kKivechSLaAVJwGv2ctp5o1', 2, 3, 'kira@ghost.com', 'No-Eyed Kira', 'painting pictures of the dark', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('Q61G0LnlVzZjTkSwwdzpn5aw77w1', 2, 4, 'beetle@ghost.com', 'Beetle Boy', 'collecting beetles', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('dJWr64l24dUsmiugDHVtfClwpPr1', 2, 5, 'scary@ghost.com', 'Sir Scarington Scary III', 'scaring small children', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('Sqa2rJI99SQOvysEqOGbBn3xe2z1', 2, 6, 'lois@ghost.com', 'Lost Lois', 'going on hikes in the wooods', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('lL5JvaKaEzQaV2VUfLgvczKhS9X2', 2, 8, 'sally@ghost.com', 'Sally Screams', 'singing', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('c9fIRNCIn6d1RIr3mz6rdeA2KSb2', 2, 7, 'patrick@ghost.com', 'Patrick', 'no Im PaTrIcK', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('HilBpZkxgVZ42utq4RaKOnO2vkf1', 2, 2, 'barry@ghost.com', 'Barry No Britches', 'nudist camps', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('1kshJtMCDVXHHvIqwWGS8PMVPn13', 2, 6, 'agnes@ghost.com', 'Agnes', 'haunting sewing rooms', '');


INSERT INTO House ([UserProfileId], [Address], [ImageUrl]) values (1, '32 Axe Cut Ln', '');
INSERT INTO House ([UserProfileId], [Address], [ImageUrl]) values (2, '876 St. Xylaphone Dr', '');
INSERT INTO House ([UserProfileId], [Address], [ImageUrl]) values (3, '531 Great Biscuit Ln', '');
INSERT INTO House ([UserProfileId], [Address], [ImageUrl]) values (4, '90 Nine Ln', '');
INSERT INTO House ([UserProfileId], [Address], [ImageUrl]) values (5, '876 St. Xylaphone Dr', '');


INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (6, 1, 'Accoustics great. Very nice screaming');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (7, 2, 'The husband has very loud snores. It has woken me up on numerous occassions.');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (8, 3, 'The neighbors come over and do blood sacrifices');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (9, 4, 'they have called in exorcists before');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (10, 5, 'It has been a nice time, but I do not think this is the family I want');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (11, 1, 'I do not get along with my roommates.  The other ghosts are boring');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (12, 2, 'I really like this family.  they hardly ever turn on the lights at night');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (13, 3, 'This has been a successful haunting indeed!');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (14, 5, 'I think the woman here is about to join us');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (15, 1, 'The children scream so much whenever I pop up.  It is kind of the greatest');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (6, 2, 'popcorn popcorn there is popcorn everywhere all in my closet.  need a new haunt');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (7, 3, 'overall, I am satisfied, but I do wish this family was quieter');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (8, 1, 'I tried possessing the wife, but now I think it is time to see if the husband would be a better fit');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (9, 2, 'there is a plumbing problem -- the house smells lovely');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (10, 1, 'I really just do not like the other ghosts here');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (11, 2, 'next time I should just haunt a grocery store instead');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (12, 1, 'nice house, awful family');
INSERT INTO Haunt ([UserProfileId], [HouseId], [Notes]) values (15, 5, 'I ended up with a bunch of morons.  they will not stop trying to talk to me');