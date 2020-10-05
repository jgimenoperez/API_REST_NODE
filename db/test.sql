
CREATE DATABASE testapimysql;

USE testapimysql;


CREATE TABLE testapimysql (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR
(100) NOT NULL,
  email VARCHAR
(100) NOT NULL,
  password VARCHAR
(100) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY users_email_unique
(email)
);

DESCRIBE testapimysql;


SELECT *
FROM testapimysql;