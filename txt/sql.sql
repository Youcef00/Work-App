CREATE TABLE Jour (
	numJour SERIAL PRIMARY KEY,
	nomJour VARCHAR(50) NOT NULL
);
CREATE UNIQUE INDEX 'unique_day' ON Jour(nomJour);
INSERT INTO Jour (numJour, nomJour) 
	VALUES (1, 'Lundi'), (2, 'Mardi'), (3, 'Mercredi'), (4, 'Jeudi'), (5, 'Vendredi'), (6, 'Samedi'), (7, 'Dimanche');
	
	
CREATE TABLE Semaine (
	numSemaine SERIAL PRIMARY KEY NOT NULL,
	debut date NOT NULL,
	fin date NOT NULL
	
);

CREATE TABLE Jours (
	jour date,
	numJour INTEGER,
	numSemaine INTEGER,
	FOREIGN KEY (numJour) REFERENCES Jour(numJour),
	FOREIGN KEY (numSemaine) REFERENCES Semaine(numSemaine)
		ON DELETE CASCADE,
	PRIMARY KEY(numSemaine, numJour, jour)
	
);

CREATE TABLE MiJournee (
	id INTEGER,
	debut time,
	fin time,
	
	numSemaine INTEGER,
	numJour INTEGER,
	jour date,
	
	FOREIGN KEY (numJour) REFERENCES Jour(numJour)
		ON DELETE CASCADE,
	FOREIGN KEY (numSemaine) REFERENCES Semaine(numSemaine)
		ON DELETE CASCADE,
	FOREIGN KEY (jour) REFERENCES Jours(jour)
		ON DELETE CASCADE,
	PRIMARY KEY(numSemaine, numJour, jour, id)
);

INSERT INTO Semaine (numSemaine, debut, fin)
	VALUES (4, date('2021-06-14'),date('2021-06-20'));
	
	
	
	
