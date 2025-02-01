-- user table
CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    password VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    type VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    active TINYINT DEFAULT 1, 
    UNIQUE (email)
);

-- Stored Procedure
DELIMITER //

CREATE PROCEDURE addUser(
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255),
    IN p_type VARCHAR(255)
)
BEGIN
    INSERT INTO users (email, password, type)
    VALUES (p_email, p_password, p_type);
END //

DELIMITER ;

-- Calling the Stored Procedure
CALL addUser('azilrababe@gmail.com', 'click-fit123++', 'admin');

