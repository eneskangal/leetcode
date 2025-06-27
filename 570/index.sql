# Write your MySQL query statement below
select name from employee
where employee.id= any(
    select db.managerId from employee as db
    where db.managerId= employee.id
    group by db.managerId
    having count(db.managerId)>=5
)