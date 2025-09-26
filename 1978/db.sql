select employee_id from employees
where salary<30000 and manager_id!= all(select db.employee_id from employees as db)
order by employee_id;