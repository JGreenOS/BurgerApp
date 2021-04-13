
USE u9zydv5t5kdsezuy; 

CREATE TABLE burger(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);