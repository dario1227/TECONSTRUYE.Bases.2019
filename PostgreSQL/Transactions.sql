CREATE FUNCTION GetStage(datas TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM STAGES WHERE description=datas;
RETURN result;
END;
$result$ LANGUAGE plpgsql

CREATE FUNCTION GetLocation(prov TEXT,dis TEXT, can TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM locations WHERE province=prov AND district=dis AND canton=can;
RETURN result;
END;
$result$ LANGUAGE plpgsql


CREATE FUNCTION GetBuild(mat TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM builds WHERE name=mat;
RETURN result;
END;
$result$ LANGUAGE plpgsql


CREATE FUNCTION GetPrice(mat TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM materials WHERE name=mat;
RETURN result;
END;
$result$ LANGUAGE plpgsql


CREATE FUNCTION GetProject(mat TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM projects WHERE name=mat;
RETURN result;
END;
$result$ LANGUAGE plpgsql

CREATE PROCEDURE PutStage(
idProyect INT,
Stage TEXT,
Begins DATE,
Ends DATE)
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE proyects
SET stageid=(select getstage(Stage)),stage=Stage,begin=Begins,ends=Ends WHERE id=idProyect;
END $$;

CREATE FUNCTION Getmaterial(mat TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM materials WHERE name=mat;
RETURN result;
END;
$result$ LANGUAGE plpgsql

CREATE FUNCTION Getspecialty(name TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM specialties WHERE description=name;
RETURN result;
END;
$result$ LANGUAGE plpgsql

CREATE FUNCTION Getemployee(emp TEXT)RETURNS INT AS $result$
DECLARE result INT;
BEGIN 
SELECT id into result FROM employees WHERE name=emp;
RETURN result;
END;
$result$ LANGUAGE plpgsql

CREATE PROCEDURE Puthours(
idProyect INT,
stageN varchar(50),
employeeN VARCHAR (50),
hoursE DATE)
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE proyects
SET hours=hoursE WHERE (id=idProyect and employee=(select getemployee(employeeN)) and stage=(select getstage(stageN)));
END $$;
