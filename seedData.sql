INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 1, 0, 'borden@axelovers.com', 'Borden Family', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 1, 0, 'sanchez@family.com', 'Sanchez Family', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 1, 0, 'smith@family.com', 'Smith Family', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 1, 0, 'blankenship@family.com', 'Blankenship Family', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 1, 0, 'anders@family.com', 'Anders Family', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 1, 'joe@ghost.com', 'Carpet Joe', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 2, 'anthony@ghost.com', 'Agonized Anthony', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 3, 'No-Eyed Kira', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 4, 'beetle@ghost.com', 'Beetle Boy', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 5, 'scary@ghost.com', 'Sir Scarington Scary III', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 6, 'lois@ghost.com', 'Lost Lois', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 8, 'sally@ghost.com', 'Sally Screams', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 7, 'patrick@ghost.com', 'Patrick', '', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 2, 'barry@ghost.com''Barry No Britches', '');
INSERT INTO UserProfile ([FirebaseUserId], [UserTypeId], [GhostTypeId], [Email], [Name], [Hobbies], [ImageUrl]) values ('', 2, 6, 'agnes@ghost.com', 'Agnes', '', '');

INSERT INTO UserType ([UserType]) values ('Ghost');
INSERT INTO UserType ([UserType]) values ('Family');


INSERT INTO GhostType ([GhostType]) values ('Spirit');
INSERT INTO GhostType ([GhostType]) values ('Poltergeist');
INSERT INTO GhostType ([GhostType]) values ('Banshee');
INSERT INTO GhostType ([GhostType]) values ('Demon');
INSERT INTO GhostType ([GhostType]) values ('Phantom');
INSERT INTO GhostType ([GhostType]) values ('Ghoul');
INSERT INTO GhostType ([GhostType]) values ('Spook');
INSERT INTO GhostType ([GhostType]) values ('Dead Witch');

INSERT INTO House ([FamilyUserProfileId], [Address], [ImageUrl]) values (1, '32 Axe Cut Ln', '');
INSERT INTO House ([FamilyUserProfileId], [Address], [ImageUrl]) values (2, '876 St. Xylaphone Dr', '');
INSERT INTO House ([FamilyUserProfileId], [Address], [ImageUrl]) values (3, '531 Great Biscuit Ln', '');
INSERT INTO House ([FamilyUserProfileId], [Address], [ImageUrl]) values (4, '90 Nine Ln', '');
INSERT INTO House ([FamilyUserProfileId], [Address], [ImageUrl]) values (5, '876 St. Xylaphone Dr', '');

INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (6, 1, 'Accoustics great. Very nice screaming');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (7, 2, 'The husband has very loud snores. It has woken me up on numerous occassions.');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (8, 3, 'The neighbors come over and do blood sacrifices');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (9, 4, 'they have called in exorcists before');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (10, 5, 'It has been a nice time, but I do not think this is the family I want');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (11, 1, 'I do not get along with my roommates.  The other ghosts are boring');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (12, 2, 'I really like this family.  they hardly ever turn on the lights at night');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (13, 3, 'This has been a successful haunting indeed!');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (14, 5, 'I think the woman here is about to join us');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (15, 1, 'The children scream so much whenever I pop up.  It is kind of the greatest');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (6, 2, 'popcorn popcorn there is popcorn everywhere all in my closet.  need a new haunt');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (7, 3, 'overall, I am satisfied, but I do wish this family was quieter');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (8, 1, 'I tried possessing the wife, but now I think it is time to see if the husband would be a better fit');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (9, 2, 'there is a plumbing problem -- the house smells lovely');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (10, 1, 'I really just do not like the other ghosts here');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (11, 2, 'next time I should just haunt a grocery store instead');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (12, 1, 'nice house, awful family');
INSERT INTO Haunt ([GhostUserProfileId], [HouseId], [Notes]) values (15, 5, 'I ended up with a bunch of morons.  they will not stop trying to talk to me');