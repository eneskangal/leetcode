select products.product_name, sum(orders.unit) as unit from products
left join orders on products.product_id = orders.product_id 
where (orders.order_date>'20200131' and orders.order_date<'20200301')
group by products.product_id
having sum(orders.unit)>99;