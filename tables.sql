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
DROP TABLE IF EXISTS GhostType;
DROP TABLE IF EXISTS UserType;
DROP TABLE IF EXISTS UserProfile;

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FirebaseUserId] nvarchar(255) UNIQUE NOT NULL,
  [UserTypeId] int NOT NULL,
  [GhostTypeId] int,
  [Email] nvarchar(255) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Hobbies] nvarchar(255),
  [ImageUrl] nvarchar(255) 
)
GO

CREATE TABLE [UserType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Type] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [GhostType] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Type] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [House] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FamilyUserProfileId] int NOT NULL,
  [Address] nvarchar(255) NOT NULL,
  [ImageUrl] nvarchar(255) 
)
GO

CREATE TABLE [Haunt] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [GhostUserProfileId] int NOT NULL,
  [HouseId] int NOT NULL,
  [Notes] nvarchar(255) 
)
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([GhostTypeId]) REFERENCES [GhostType] ([Id])
GO

ALTER TABLE [House] ADD FOREIGN KEY ([FamilyUserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Haunt] ADD FOREIGN KEY ([GhostUserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Haunt] ADD FOREIGN KEY ([HouseId]) REFERENCES [House] ([Id])
GO
