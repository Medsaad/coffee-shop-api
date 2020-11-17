-- create database
CREATE DATABASE IF NOT EXISTS coffee_shop;

-- create user and grant access to database
DROP USER 'root'@'%';
FLUSH PRIVILEGES;
CREATE USER 'root'@'%' IDENTIFIED BY 'root';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `coffee_shop`.* TO 'root'@'%';


-- create tables
USE coffee_shop;
CREATE TABLE IF NOT EXISTS coffee_machine (id int NOT NULL AUTO_INCREMENT, sku varchar(6) NOT NULL, product_type varchar(25) NOT NULL, water_line_compatible tinyint NOT NULL, PRIMARY KEY (id));
CREATE TABLE IF NOT EXISTS coffee_pod (id int NOT NULL AUTO_INCREMENT, sku varchar(6) NOT NULL, coffee_flavor tinyint NOT NULL, pack_size int NOT NULL, PRIMARY KEY (id));