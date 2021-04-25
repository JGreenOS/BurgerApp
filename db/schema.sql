DROP DATABASE IF EXISTS u9zydv5t5kdsezuy;
CREATE DATABASE u9zydv5t5kdsezuy;

USE u9zydv5t5kdsezuy;

   CREATE TABLE burgers (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        burger_name VARCHAR(100) UNIQUE NOT NULL,
        eaten BOOLEAN DEFAULT false
   );
 
