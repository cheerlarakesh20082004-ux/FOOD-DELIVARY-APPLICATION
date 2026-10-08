CREATE USER IF NOT EXISTS 'foodexpress'@'localhost' IDENTIFIED BY 'FoodExpress@123';
GRANT ALL PRIVILEGES ON foodexpress_db.* TO 'foodexpress'@'localhost';
FLUSH PRIVILEGES;

SELECT 'User foodexpress created and granted access.' AS status;
