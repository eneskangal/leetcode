select name as customers
from customers
left join orders
on customers.id = orders.customerId
where orders.customerId is null;