CREATE DATABASE u9zydv5t5kdsezuy; 
USE u9zydv5t5kdsezuy; 

CREATE TABLE burger(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)
);