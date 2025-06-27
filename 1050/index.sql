# Write your MySQL query statement below
select actor_id, director_id from actordirector
group by director_id, actor_id
having count(director_id)>2