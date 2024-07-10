select employee_id, if(employee_id%2= 1 and substring(name, 1, 1)!="M", salary, 0) as bonus from employees
order by employee_id;