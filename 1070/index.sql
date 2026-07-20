select product_id, year as first_year, quantity, price from sales
where product_id= any(
    select product_id from sales     
) and year= any(
    select min(year) from sales as db 
    where db.product_id= sales.product_id 
)