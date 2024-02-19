select Product.product_name, Sales.year, Sales.price from Sales
FULL OUTER JOIN Product on Product.product_id=Sales.product_id
where Sales.year IS NOT NULL OR Sales.price IS NOT NULL 