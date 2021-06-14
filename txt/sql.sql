CREATE TABLE JourDeSemaine (
	numJour SERIAL PRIMARY KEY,
	nomJour VARCHAR(50) NOT NULL
);
CREATE UNIQUE INDEX 'unique_day' ON JourDeSemaine(nomJour);
INSERT INTO JourDeSemaine (numJour, nomJour) 
	VALUES (1, 'Lundi'), (2, 'Mardi'), (3, 'Mercredi'), (4, 'Jeudi'), (5, 'Vendredi'), (6, 'Samedi'), (7, 'Dimanche');
	
	
CREATE TABLE Semaine (
	numSemaine SERIAL PRIMARY KEY NOT NULL,
	debut date NOT NULL,
	fin date NOT NULL
	
);

CREATE TABLE Jour (
	matinDebut time,
	matinFin time,
	soirDebut time,
	soirFin time,

	dateJour date,
	numJour INTEGER,
	numSemaine INTEGER,
	FOREIGN KEY (numJour) REFERENCES JourDeSemaine(numJour),
	FOREIGN KEY (numSemaine) REFERENCES Semaine(numSemaine)
		ON DELETE CASCADE,
	PRIMARY KEY(numSemaine, numJour, dateJour)
	
);





INSERT INTO Semaine (numSemaine, debut, fin)
	VALUES (4, date('2021-06-14'),date('2021-06-20'));
	
INSERT INTO Jour (dateJour, numJour, numSemaine, matinDebut, matinFin, soirDebut, soirFin)
	VALUES (date('2021-06-20'), 1, 4, '11:15', '15:00', '18:30', '23:45');


	
	
	
