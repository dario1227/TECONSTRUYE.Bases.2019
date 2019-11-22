ALTER TABLE engineers
ADD FOREIGN KEY(specialty) REFERENCES specialties(ID)

ALTER TABLE employees
ADD FOREIGN KEY(proyectid) REFERENCES projects(ID)

ALTER TABLE Builds
ADD FOREIGN KEY(location) REFERENCES locations(ID)

ALTER TABLE Builds
ADD FOREIGN KEY(Owner) REFERENCES clients(Username)

ALTER TABLE Builds
ADD FOREIGN KEY(proyect) REFERENCES projects(id)

ALTER TABLE projects
ADD FOREIGN KEY(stageid) REFERENCES stages(id)

ALTER TABLE materialregistries
ADD FOREIGN KEY(material) REFERENCES materials(id)

ALTER TABLE materialregistries
ADD FOREIGN KEY(Build) REFERENCES builds(id)

ALTER TABLE materialregistries
ADD FOREIGN KEY(stage) REFERENCES stages(id)


