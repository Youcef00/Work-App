CREATE TABLE Jour (
	numJour SERIAL PRIMARY KEY,
	nomJour VARCHAR(50) NOT NULL
);
CREATE UNIQUE INDEX 'unique_day' ON Jour(nomJour);
INSERT INTO jour (numJour, nomJour) 
	VALUES (1, 'Lundi'), (2, 'Mardi'), (3, 'Mercredi'), (4, 'jeudi'), (5, 'vendredi'), (6, 'Samedi'), (7, 'Dimanche');
	
	
CREATE TABLE Semaine (
	numSemaine SERIAL PRIMARY KEY NOT NULL,
	debut date NOT NULL,
	fin date NOT NULL,
	totalesHeures INTEGER,
	paiement REAL
);

CREATE TABLE Jours (
	jour date,
	matin time,
	soir time,
	numJour INTEGER,
	numSemaine INTEGER,
	FOREIGN KEY (numJour) REFERENCES Jour(numJour),
	FOREIGN KEY (numSemaine) REFERENCES Semaine(numSemaine)
		ON DELETE CASCADE,
	PRIMARY KEY(numSemaine, numJour, jour)
	
);
