ALTER TABLE engineer
ADD FOREIGN KEY(ID) REFERENCES employee(ID)/////

ALTER TABLE engineer
ADD FOREIGN KEY(specialty) REFERENCES specialty(ID)

ALTER TABLE build
ADD FOREIGN KEY(Owner) REFERENCES client(Username)////

ALTER TABLE build
ADD FOREIGN KEY(Proyect) REFERENCES proyect(ID)//////

ALTER TABLE Proyect
ADD FOREIGN KEY(Employee) REFERENCES employee(ID)////

ALTER TABLE Proyect
ADD FOREIGN KEY(StageID) REFERENCES stage(ID)

ALTER TABLE materialregistry
ADD FOREIGN KEY(Material) REFERENCES materials(ID)/////

ALTER TABLE materialregistry
ADD FOREIGN KEY(Stage) REFERENCES stage(ID)///////7

ALTER TABLE materialregistry
ADD FOREIGN KEY(Build) REFERENCES build(ID)///////

ALTER TABLE build
ADD FOREIGN KEY(materials) REFERENCES materialregistry(ID)

ALTER TABLE bills
ADD FOREIGN KEY(Proyect) REFERENCES proyect(ID)/////////

ALTER TABLE build
ADD FOREIGN KEY(Location) REFERENCES Location(ID)//////