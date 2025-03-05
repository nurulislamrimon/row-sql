CREATE DATABASE raw_sql_learning;
USE raw_sql_learning;
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    age INT
);

INSERT INTO students (name, age) VALUES ('John', 20);