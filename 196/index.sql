-- Write your PostgreSQL query statement below
delete from person where email= any(
    select email from person as db
    where db.id<person.id
)