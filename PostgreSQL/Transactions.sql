CREATE FUNCTION GetStage(stages VARCHAR(50))RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM STAGE WHERE description=stages;
RETURN result;
END;
$result$ LANGUAGE plpgsql

CREATE FUNCTION GetPrice(mat VARCHAR(50))RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM material WHERE name=mat;
RETURN result;
END;

$result$ LANGUAGE plpgsql
CREATE PROCEDURE PutStage(
idProyect INT,
Stage VARCHAR (50),
Begins DATE,
Ends DATE)
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE proyect 
SET stageid=(select getstage(Stage)),stage=Stage,begin=Begins,ends=Ends WHERE id=idProyect;
END $$;

CREATE FUNCTION Getmaterial(mat VARCHAR(50))RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM materials WHERE name=mat;
RETURN result;
END;
$result$ LANGUAGE plpgsql

CREATE PROCEDURE PutMaterial(
nameM varchar(50),
Stage VARCHAR (50),
amount INT,
buildid INT)
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO materialregistry(price,quiantity,material,build,name,stage)
	VALUES((select getprice(nameM)),amount,(select getmaterial(nameM)),buildid,nameM,(select getstage(stage)));
END $$;

CREATE FUNCTION Getemployee(emp VARCHAR(50))RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM employee WHERE name=emp;
RETURN result;
END;
$result$ LANGUAGE plpgsql

$result$ LANGUAGE plpgsql

CREATE PROCEDURE Puthours(
idProyect INT,
stageN varchar(50),
employeeN VARCHAR (50),
hoursE DATE)
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE proyect
SET hours=hoursE WHERE (id=idProyect and employee=(select getemployee(employeeN)) and stage=(select getstage(stageN)));
END $$;

CREATE PROCEDURE PutBills(
nameM varchar(50),
photoURL VARCHAR (500),
NumberBill INT,
buildid INT,
moneyB INT,
providerN VARCHAR(50))
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO bills(materials,photo,number,proyect,total,provider)
	VALUES((select getmaterial(nameM)),photoURL,NumberBill,buildid,moneyB,providerN);
END $$;
