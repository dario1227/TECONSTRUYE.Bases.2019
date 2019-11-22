CREATE TABLE clientPrueba(
Nombre varchar(255),
Cedula varchar(255),
Telefono varChar(255),
Correo varchar(255),
Nacionalidad varchar(255))

CREATE TABLE client(
Nombre varchar(255),
Cedula int,
Telefono int,
Correo varchar(255),
Nacionalidad varchar(255))

CREATE TABLE PROPERTY(
name TEXT,
Province TEXT,
District TEXT,
Canton TEXT,
Rooms INT,
Baths INT,
Floor INT,
Gsize INT,
Bsize INT,
)

select *  FROM CLIENT.teconstruye.[public].clients

begin tran

if not exists (SELECT Nombre,Cedula,Telefono from client)
begin
insert into client(Nombre,Cedula,Telefono)
SELECT name,identification,phone from CLIENT.teconstruye.[public].clients;
end
commit tran
select * from clientPrueba

delete from client
select * from client



sp_configure 'show advanced options',1  
reconfigure 


