SELECT *
FROM products
WHERE description ~ '\mSN[0-9]{4}-[0-9]{4}\M'
ORDER BY product_id;