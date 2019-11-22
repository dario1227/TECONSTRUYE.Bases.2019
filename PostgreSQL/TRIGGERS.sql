


CREATE OR REPLACE FUNCTION proteger_datos() RETURNS TRIGGER AS $proteger_datos$
  DECLARE
  BEGIN
   RETURN NULL;
  END;
  
$proteger_datos$ LANGUAGE plpgsql;

CREATE TRIGGER proteger_datos BEFORE DELETE 
    ON stages FOR EACH ROW 
    EXECUTE PROCEDURE proteger_datos();
	
CREATE TRIGGER proteger_datos2 BEFORE DELETE 
    ON specialties FOR EACH ROW 
    EXECUTE PROCEDURE proteger_datos();

CREATE TRIGGER proteger_datos3 BEFORE DELETE 
    ON locations FOR EACH ROW 
    EXECUTE PROCEDURE proteger_datos();	
select * from specialties