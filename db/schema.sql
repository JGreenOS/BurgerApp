DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

<<<<<<< HEAD
   CREATE TABLE burgers (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        burger_name VARCHAR(100) UNIQUE NOT NULL,
        eaten BOOLEAN DEFAULT false
   );
 
=======
CREATE TABLE burger(
    id int NOT NULL AUTO_INCREMENT primary key,
    burger_name varchar(255) unique NOT NULL,
    eaten BOOLEAN DEFAULT false
);
>>>>>>> b20f5d9d7f3836343829e8e8bce95ae41d0be176
