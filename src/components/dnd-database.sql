CREATE DATABASE DDCHARACTERS;
USE DDCHARACTERS;

-- DROP TABLE IF EXISTS USER; 
-- CREATE TABLE USER (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
--     password VARCHAR(55) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     username VARCHAR(100)
-- );

-- INSERT INTO USER (password, email, username) VALUES ('test', 'test', 'test');

DROP TABLE IF EXISTS CLASS;
CREATE TABLE CLASS (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    cancast BOOL NOT NULL
);

DROP TABLE IF EXISTS RACE;
CREATE TABLE RACE (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
    wisdom_modifier INT NOT NULL DEFAULT 0,
    charisma_modifier INT NOT NULL DEFAULT 0, 
    strength_modifier INT NOT NULL DEFAULT 0,
    dexterity_modifier INT NOT NULL DEFAULT 0,
    intelligence_modifier INT NOT NULL DEFAULT 0,
    constitution_modifier INT NOT NULL DEFAULT 0
); 

DROP TABLE IF EXISTS SPELLS;
CREATE TABLE SPELLS (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES CLASS(id) -- add on delete/ on update
);


/* INSERTING INTO SPELLS AND KNOWS_SPELL TABLE */
-- bard, id 1
INSERT INTO SPELLS(name, class_id) VALUES ('Animal friendship', 1);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (1, 1);

INSERT INTO SPELLS(name, class_id) VALUES ('Bane', 1);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (2, 1);

INSERT INTO SPELLS(name, class_id) VALUES ('Charm Person', 1);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (3, 1);

INSERT INTO SPELLS(name, class_id) VALUES ('Color Spray', 1);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (4, 1);

INSERT INTO SPELLS(name, class_id) VALUES ('Command', 1);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (5, 1);


-- cleric, id 2
INSERT INTO SPELLS(name, class_id) VALUES ('Bane', 2);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (6, 2);

INSERT INTO SPELLS(name, class_id) VALUES ('Bless', 2);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (7, 2);

INSERT INTO SPELLS(name, class_id) VALUES ('Ceremony', 2);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (8, 2);

INSERT INTO SPELLS(name, class_id) VALUES ('Command', 2);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (9, 2);

INSERT INTO SPELLS(name, class_id) VALUES ('Cure Wounds', 2);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (10, 2);


-- druid, id 3
INSERT INTO SPELLS(name, class_id) VALUES ('Absorb Elements', 3);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (11, 3);

INSERT INTO SPELLS(name, class_id) VALUES ('Animal friendship', 3);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (12, 3);

INSERT INTO SPELLS(name, class_id) VALUES ('Cure Wounds', 3);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (13, 3);

INSERT INTO SPELLS(name, class_id) VALUES ('Detect Magic', 3);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (14, 3);

INSERT INTO SPELLS(name, class_id) VALUES ('Entangle', 3);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (15, 3);


-- sorcerer, id 4
INSERT INTO SPELLS(name, class_id) VALUES ('Acid Splash', 4);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (16, 4);

INSERT INTO SPELLS(name, class_id) VALUES ('Blade Ward', 4);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (17, 4);

INSERT INTO SPELLS(name, class_id) VALUES ('Chill Touch', 4);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (18, 4);

INSERT INTO SPELLS(name, class_id) VALUES ('Control Flames', 4);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (19, 4);

INSERT INTO SPELLS(name, class_id) VALUES ('Dancing Lights', 4);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (20, 4);


-- warlock, id 5
INSERT INTO SPELLS(name, class_id) VALUES ('Blade Ward', 5);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (21, 5);

INSERT INTO SPELLS(name, class_id) VALUES ('Booming Blade', 5);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (22, 5);

INSERT INTO SPELLS(name, class_id) VALUES ('Chill Touch', 5);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (23, 5);

INSERT INTO SPELLS(name, class_id) VALUES ('Eldritch Blast', 5);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (24, 5);

INSERT INTO SPELLS(name, class_id) VALUES ('Frostbite', 5);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (25, 5);


-- wizard, id 6
INSERT INTO SPELLS(name, class_id) VALUES ('Acid Splash', 6);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (26, 6);

INSERT INTO SPELLS(name, class_id) VALUES ('Blade Ward', 6);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (27, 6);

INSERT INTO SPELLS(name, class_id) VALUES ('Control Flames', 6);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (28, 6);

INSERT INTO SPELLS(name, class_id) VALUES ('Gust', 6);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (29, 6);

INSERT INTO SPELLS(name, class_id) VALUES ('Light', 6);
INSERT INTO KNOWS_SPELL(spell_id, class_id) VALUES (30, 6);







DROP TABLE IF EXISTS KNOWS_SPELL;
CREATE TABLE KNOWS_SPELL(
	spell_id INT NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (spell_id) REFERENCES SPELLS(id), -- add on delete/ on update
    FOREIGN KEY (class_id) REFERENCES CLASS(id) -- add on delete/ on update
);

DROP TABLE IF EXISTS DDCHARACTER;
CREATE TABLE DDCHARACTER(
	id INT PRIMARY KEY AUTO_INCREMENT,
    char_name VARCHAR(255) NOT NULL,
    class_id INT NOT NULL,
    race_id INT NOT NULL,
    wisdom INT NOT NULL,
    charisma INT NOT NULL, 
    strength INT NOT NULL,
    dexterity INT NOT NULL,
    intelligence INT NOT NULL,
    constitution INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES CLASS(id), -- add on delete/ on update
    FOREIGN KEY (race_id) REFERENCES RACE(id) -- add on delete/ on update
);

-- relationship table for user owns character
-- DROP TABLE IF EXISTS OWNS;
-- CREATE TABLE OWNS (
-- 	user_id INT NOT NULL,
--     ddcharacter_id INT NOT NULL,
--     FOREIGN KEY (user_id) REFERENCES USER(id), -- add on delete/ on update
--     FOREIGN KEY (ddcharacter_id) REFERENCES DDCHARACTER(id) -- add on delete/ on update
--     
-- );

INSERT INTO CLASS(name, cancast) VALUES ('Bard', true);
INSERT INTO CLASS(name, cancast) VALUES ('Cleric', true);
INSERT INTO CLASS(name, cancast) VALUES ('Druid', true);
INSERT INTO CLASS(name, cancast) VALUES ('Sorcerer', true);
INSERT INTO CLASS(name, cancast) VALUES ('Warlock', true);
INSERT INTO CLASS(name, cancast) VALUES ('Wizard', true);

INSERT INTO CLASS(name, cancast) VALUES ('Barbarian', false);
INSERT INTO CLASS(name, cancast) VALUES ('Fighter', false);
INSERT INTO CLASS(name, cancast) VALUES ('Monk', false);
INSERT INTO CLASS(name, cancast) VALUES ('Paladin', false);
INSERT INTO CLASS(name, cancast) VALUES ('Ranger', false);
INSERT INTO CLASS(name, cancast) VALUES ('Rogue', false);


-- dragonborn, +2 strength, +1 charisma
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Dragonborn', 0, 0, 1, 2, 0, 0);

-- dwarf, + 2 constitution
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Dwarf', 0, 0, 0, 0, 0, 2);

-- elf, + 2 dexterity
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Elf', 0, 0, 0, 2, 0, 0);

-- gnome, + 2 intelligence
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Gnome', 0, 0, 0, 0, 2, 0);

-- half-elf, +2 charisma
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Half-Elf', 0, 2, 0, 0, 0, 0);

-- halfling, +2 dexterity
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Halfling', 0, 0, 0, 2, 0, 0);

-- half-orc, +2 strength, +1 constitution
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Half-Orc', 0, 0, 3, 0, 0, 1);

-- human, + 1 all ability scores
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Human', 1, 1, 1, 1, 1, 1);

-- tiefling, +2 charisma, +1 intelligence
INSERT INTO RACE(name, wisdom_modifier, charisma_modifier, strength_modifier,
dexterity_modifier, intelligence_modifier, constitution_modifier) VALUES 
('Tiefling', 0, 2, 0, 0, 1, 0);


INSERT INTO DDCHARACTER(char_name, class_id, race_id, wisdom, charisma, strength, dexterity, intelligence, constitution)
VALUES ('Harmonia the Mystic', 1, 1, 1, 2, 3, 4, 5, 6);
SELECT * from CLASS;



-- to allow non-deterministic functions
SET GLOBAL log_bin_trust_function_creators = 1;

-- function to roll 3d6 and add them up. Will generate a random number between 1 and 18.
DROP FUNCTION IF EXISTS rolldice; 
DELIMITER //

CREATE FUNCTION rolldice()
RETURNS INT
NOT DETERMINISTIC
CONTAINS SQL
BEGIN
	DECLARE dice_roll1 INT;
    DECLARE dice_roll2 INT;
    DECLARE dice_roll3 INT;

	SELECT FLOOR(RAND()*(6-1+1)+1) INTO dice_roll1;	
    SELECT FLOOR(RAND()*(6-1+1)+1) INTO dice_roll2;
	SELECT FLOOR(RAND()*(6-1+1)+1) INTO dice_rolL3;

RETURN dice_roll1 + dice_roll2 + dice_roll3;
END//
DELIMITER ;

SELECT rolldice() AS 'die';


-- procedure to create a character.
-- ability scores get generated through the function rolldice and modifiers get added
-- based on the character's race 
					DROP PROCEDURE IF EXISTS create_character;
DELIMITER //
CREATE PROCEDURE create_character(c_name VARCHAR(255), race_idx INT, class_idx INT)
    
	BEGIN
    DECLARE wisdom_f INT;
    DECLARE charisma_f INT;
    DECLARE strength_f INT;
    DECLARE dexterity_f INT;
    DECLARE intelligence_f INT;
    DECLARE constitution_f INT;
    DECLARE wmod INT;
    DECLARE cmod INT;
    DECLARE smod INT;
    DECLARE dmod INT;
    DECLARE imod INT;
    DECLARE comod INT; 
    
    SELECT wisdom_modifier FROM RACE WHERE RACE.id = race_idx INTO wmod;
    SELECT charisma_modifier FROM RACE WHERE RACE.id = race_idx INTO cmod;
    SELECT strength_modifier FROM RACE WHERE RACE.id = race_idx INTO smod;
    SELECT dexterity_modifier FROM RACE WHERE RACE.id = race_idx INTO dmod;
    SELECT intelligence_modifier FROM RACE WHERE RACE.id = race_idx INTO imod;
    SELECT constitution_modifier FROM RACE WHERE RACE.id = race_idx INTO comod;
    
     SELECT rolldice() + wmod INTO wisdom_f;
     SELECT rolldice() + cmod INTO charisma_f;
     SELECT rolldice() + smod INTO strength_f;
     SELECT rolldice() + dmod INTO dexterity_f;
     SELECT rolldice() + imod INTO intelligence_f;
     SELECT rolldice() + comod INTO constitution_f;
     
     INSERT INTO DDCHARACTER (char_name, class_id, race_id, wisdom, charisma, strength, dexterity, intelligence, constitution) 
     VALUES (c_name, class_idx, race_idx, wisdom_f, charisma_f, strength_f, dexterity_f, intelligence_f, constitution_f);
	
    END//
DELIMITER ;

