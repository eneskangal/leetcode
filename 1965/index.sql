select salaries.employee_id from salaries
left outer join employees on employees.employee_id = salaries.employee_id 
where employees.employee_id is null
union
select employees.employee_id from employees
left outer join salaries on employees.employee_id = salaries.employee_id 
where salaries.employee_id is null
order by employee_id;