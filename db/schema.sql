
USE u9zydv5t5kdsezuy; 

CREATE TABLE burger(
    id int NOT NULL AUTO_INCREMENT primary key,
    burger_name varchar(255) unique NOT NULL,
    eaten BOOLEAN DEFAULT false
);