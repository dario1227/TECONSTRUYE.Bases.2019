CREATE TABLE Ingeniero(
	Nombre Varchar(50),
	Telefono INT,
	Codigo INT NOT NULL,
	Especialidad Varchar(50),
	Cedula INT ,
	PRIMARY KEY (Codigo)
)
CREATE TABLE Especialidad(
	Descripcion VARCHAR(50)
)
CREATE TABLE Cliente(
	Nombre VarChar(50),
	Telefono INT,
	Cedula INT NOT NULL,
	UserName VarChar(50) NOT NULL,
	UNIQUE(UserName),
	PRIMARY KEY(UserName)
)
CREATE TABLE Empleados(
	Nombre Varchar(50),
	Cedula INT NOT NULL,
	Telefono INT,
	PagoHora INT,
	Proyecto INT,
	Codigo INT,
	UNIQUE(Cedula),
	PRIMARY KEY (Codigo)
)
CREATE TABLE Materiales(
	Nombre Varchar(50),
	Codigo INT NOT NULL,
	PrecioUnitario INT,
	PRIMARY KEY(Codigo)
)
CREATE TABLE Etapa(
	Codigo INT NOT NULL,
	Descripcion VARCHAR(50),
	PRIMARY KEY (Codigo)
)
CREATE TABLE Obra(
	Nombre VARCHAR(50),
	Ubicacion INT,
	Habitaciones INT,
	Baños INT,
	Pisos INT,
	TamañoLote INT,
	TamañoObra INT,
	Dueño VARCHAR(50),
	Proyecto INT,
	Codigo INT,
	Materiales INT,
	PRIMARY KEY(Codigo)
)
CREATE TABLE Proyecto(
	Codigo INT,
	Empleado INT,
	Horas INT,
	PRIMARY KEY(Codigo)
)
CREATE TABLE RegistroMateriales(
	Costo INT,
	Cantidad INT,
	Material INT,
	Obra INT,
	Etapa VarCHAR(50),
	Codigo INT,
	Primary KEY (Codigo)
)
CREATE TABLE Factura(
	Materiales INT,
	Foto VARCHAR(200),
	Numero INT,
	Proyecto INT,
	Proveedor VARCHAR(50),
	PRIMARY KEY(Numero)
)
CREATE TABLE Ubicacion(
	Provincia VARCHAR(50),
	Distrito VARCHAR(50),
	Canton VARCHAR(50),
	Codigo INT,
	PRIMARY KEY (Codigo)
)