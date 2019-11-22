CREATE TABLE Engineers(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	Name Varchar(50),
	Phone INT,
	Specialty INT,
	Identification INT ,
	PRIMARY KEY (ID)
)
CREATE TABLE Specialties(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	Description VARCHAR(50),
	UNIQUE(ID)
)
CREATE TABLE Clients(
	UserName VarChar(50) NOT NULL,
	Name VarChar(50),
	Phone INT,
	Identification INT NOT NULL,
	UNIQUE(UserName),
	PRIMARY KEY(UserName)
)
CREATE TABLE Employees(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	Name Varchar(50),
	Identification INT NOT NULL,
	Phone INT,
	HourPrice INT,
	Hours INT,
	Proyectid INT,
	Project TEXT,
	PRIMARY KEY (ID)
)
CREATE TABLE Materials(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL ,
	Name Varchar(50),
	UnitPrice INT,
	PRIMARY KEY(ID)
)

CREATE TABLE Stages(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	Description VARCHAR(50),
	PRIMARY KEY (ID)
)
CREATE TABLE Builds(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL ,
	Name VARCHAR(50),
	location INT,
	Rooms INT,
	Bathrooms INT,
	Floor INT,
	GroundSize INT,
	BuildSize INT,
	Owner VARCHAR(50),
	Proyect INT,
	proyectname TEXT,
	PRIMARY KEY(ID)
)
CREATE TABLE Projects(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	name TEXT,
	Hours INT,
	StageID INT,
	Stage VARCHAR(50),
	Begin DATE,
	ENDS DATE,
	PRIMARY KEY(ID)
)

CREATE TABLE MaterialRegistries(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	Price INT,
	Quantity INT,
	Material INT,
	Build INT,
	BuildName TEXT,
	Name VARCHAR(50),
	total INT,
	Stage INT,
	Primary KEY (ID)
)
CREATE TABLE Bills(
	Materials INT,
	Photo VARCHAR(200),
	Number INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	Proyect INT,
	Total INT,
	Provider VARCHAR(50),
	PRIMARY KEY(Number)
)

CREATE TABLE Locations(
	ID INT GENERATED ALWAYS AS IDENTITY NOT NULL,
	Province VARCHAR(50),
	Canton VARCHAR(50),
	District VARCHAR(50),
	PRIMARY KEY (ID)
)