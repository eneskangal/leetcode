select department.name as Department, employee.name as Employee, employee.salary as Salary from employee
inner join department on employee.departmentId= department.id
where employee.salary= all(
    select max(db.salary) from employee as db
    where db.departmentId= employee.departmentId
)




