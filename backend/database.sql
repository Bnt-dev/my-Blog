-- CREATE TABLE item (
--   id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

DROP TABLE IF EXISTS own;

DROP TABLE IF EXISTS skills;

DROP TABLE IF EXISTS cards;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS villages;

DROP TABLE IF EXISTS techniques;

DROP TABLE IF EXISTS rarities;


CREATE TABLE rarities (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  rating int,
  label varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE techniques (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category varchar(255) NOT NULL,
  element varchar(255) NOT NULL,
  power int
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE villages (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  description longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE users (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE cards (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  name varchar(255) NOT NULL,
  description longtext,
  cost int(5) NOT NULL,
  evolution_of int,
  quantity int,
  shiny boolean,
  rarity_id int(11) UNSIGNED,
  village_id int(11) UNSIGNED,
  CONSTRAINT card_rarity_id_fk FOREIGN KEY (rarity_id) REFERENCES rarities(id),
  CONSTRAINT card_village_id_fk FOREIGN KEY (village_id) REFERENCES villages(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE skills (
  card_id int(11) UNSIGNED,
  technique_id int(11) UNSIGNED,
  CONSTRAINT skill_card_id_fk FOREIGN KEY (card_id) REFERENCES cards(id),
  CONSTRAINT skill_technique_id_fk FOREIGN KEY (technique_id) REFERENCES techniques(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE own (
  card_id int(11) UNSIGNED,
  user_id int(11) UNSIGNED,
  CONSTRAINT own_card_id_fk FOREIGN KEY (card_id) REFERENCES cards(id),
  CONSTRAINT own_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
