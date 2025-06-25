# Write your MySQL query statement below
select  if(count(salary)=1, null, 
(
    select salary from employee    
    group by salary 
    order by salary desc 
    limit 1
    offset 1
)
) as SecondHighestSalary from employee





