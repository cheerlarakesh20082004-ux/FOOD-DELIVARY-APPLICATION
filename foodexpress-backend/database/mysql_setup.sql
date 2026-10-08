-- FoodExpress MySQL database setup
-- Run this script as a MySQL admin user (root or a user with CREATE USER / GRANT privileges)

CREATE DATABASE IF NOT EXISTS foodexpress_db;
USE foodexpress_db;

CREATE USER IF NOT EXISTS 'foodexpress'@'localhost' IDENTIFIED BY 'FoodExpress@123';
GRANT ALL PRIVILEGES ON foodexpress_db.* TO 'foodexpress'@'localhost';
FLUSH PRIVILEGES;

SELECT 'Database and user created successfully.' AS status;
