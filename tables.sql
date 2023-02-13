USE MASTER
GO

IF NOT EXISTS (
    SELECT [name]
    FROM sys.databases
    WHERE [name] = N'BooWhom'
)
CREATE DATABASE BooWhom
GO

USE BooWhom
GO

DROP TABLE IF EXISTS Haunt;
DROP TABLE IF EXISTS House;
DROP TABLE IF EXISTS UserProfile;
DROP TABLE IF EXISTS GhostType;
DROP TABLE IF EXISTS UserType;

CREATE TABLE [UserType] (
  [Id] int NOT NULL PRIMARY KEY IDENTITY(1, 1),
  [Type] nvarchar(255) NOT NULL
);

CREATE TABLE [GhostType] (
  [Id] int NOT NULL PRIMARY KEY IDENTITY(1, 1),
  [Type] nvarchar(255) 
);

CREATE TABLE [UserProfile] (
  [Id] int NOT NULL PRIMARY KEY IDENTITY(1, 1),
  [FirebaseUserId] nvarchar(255) NOT NULL,
  [UserTypeId] int NOT NULL,
  [GhostTypeId] int,
  [Email] nvarchar(255) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Hobbies] nvarchar(255),
  [ImageUrl] nvarchar(255), 
  CONSTRAINT FK_UserProfile_UserType FOREIGN KEY (UserTypeId) REFERENCES [UserType](Id),
  CONSTRAINT FK_UserProfile_GhostType FOREIGN KEY (GhostTypeId) REFERENCES GhostType(Id)
  
);


CREATE TABLE [House] (
  [Id] int NOT NULL PRIMARY KEY IDENTITY(1, 1),
  [UserProfileId] int NOT NULL,
  [Address] nvarchar(255) NOT NULL,
  [ImageUrl] nvarchar(255), 
  [Notes] nvarchar(255),
  CONSTRAINT FK_House_UserProfile FOREIGN KEY (UserProfileId) REFERENCES [UserProfile](Id)
);


CREATE TABLE [Haunt] (
  [Id] int NOT NULL PRIMARY KEY IDENTITY(1, 1),
  [UserProfileId] int NOT NULL,
  [GhostTypeId] int,
  [HouseId] int NOT NULL,
  [Notes] nvarchar(255), 
  CONSTRAINT FK_Haunt_UserProfile FOREIGN KEY (UserProfileId) REFERENCES [UserProfile](Id),
  CONSTRAINT FK_Haunt_GhostType FOREIGN KEY (GhostTypeId) REFERENCES [GhostType](Id),
  CONSTRAINT FK_Haunt_House FOREIGN KEY (HouseId) REFERENCES [House](Id)
);




