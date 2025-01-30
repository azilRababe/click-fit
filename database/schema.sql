CREATE DATABASE click_fit;

USE click_fit;

CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    password VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    type VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    active TINYINT DEFAULT 1
);

DELIMITER //
CREATE PROCEDURE addUser(IN email VARCHAR(255), IN password VARCHAR(255), IN type VARCHAR(255))
BEGIN
    INSERT INTO users (email, password, type) VALUES (email, password, type);
END //
DELIMITER ;

CALL addUser('ben.miller@onwavegroup.com', 'hashed_password', 'admin');
