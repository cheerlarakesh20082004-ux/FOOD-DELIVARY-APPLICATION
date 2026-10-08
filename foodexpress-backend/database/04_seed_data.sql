USE foodexpress_db;

INSERT INTO restaurants (name, description, cuisine_type, rating, delivery_time, image_url)
VALUES
    ('Burger Haven', 'Classic juicy burgers and loaded fries.', 'American', 4.8, '20-30 min', 'https://images.unsplash.com/...'),
    ('Spice Route', 'Authentic Indian flavors with fresh ingredients.', 'Indian', 4.7, '25-35 min', 'https://images.unsplash.com/...'),
    ('Green Bowl', 'Healthy wraps, salads, and smoothie bowls.', 'Healthy', 4.9, '15-25 min', 'https://images.unsplash.com/...')
ON DUPLICATE KEY UPDATE name = VALUES(name);

INSERT INTO menu_items (restaurant_id, name, description, price, category, image_url, is_available)
VALUES
    (1, 'Classic Chicken Burger', 'Grilled chicken burger with lettuce and mayo.', 220.00, 'Burger', 'https://images.unsplash.com/...', TRUE),
    (1, 'Cheese Smash Burger', 'Double patty with melted cheese.', 280.00, 'Burger', 'https://images.unsplash.com/...', TRUE),
    (2, 'Butter Chicken Bowl', 'Creamy and rich chicken curry bowl.', 320.00, 'Main Course', 'https://images.unsplash.com/...', TRUE),
    (2, 'Paneer Tikka Wrap', 'Spiced paneer wrap with fresh salad.', 260.00, 'Wrap', 'https://images.unsplash.com/...', TRUE),
    (3, 'Avocado Salad', 'Fresh greens, avocado, and lemon dressing.', 240.00, 'Salad', 'https://images.unsplash.com/...', TRUE),
    (3, 'Protein Bowl', 'Quinoa, grilled veggies, and hummus.', 300.00, 'Bowls', 'https://images.unsplash.com/...', TRUE)
ON DUPLICATE KEY UPDATE name = VALUES(name);

SELECT 'Seed data inserted successfully.' AS status;
