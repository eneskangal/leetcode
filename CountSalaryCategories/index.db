select 'Low Salary' as category, count(*) as accounts_count 
from accounts
where income < 20000
union all
select 'Average Salary' as category, count(*) as accounts_count 
from accounts
where income between 20000 and 50000
union all
select 'High Salary' as category, count(*) as accounts_count 
from accounts
where income > 50000;