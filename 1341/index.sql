
(   
    select movies.title as results from movierating
    inner join movies on movierating.movie_id= movies.movie_id  
    where to_char(movieRating.created_at, 'MM') like '02%' and to_char(movieRating.created_at, 'YYYY') like '2020%'  
    group by movies.title
    order by avg(movierating.rating) desc, movies.title asc
    limit 1
)
union all
(
    select users.name as results from movierating
    inner join users on movierating.user_id= users.user_id
    group by movierating.user_id, users.name
    order by count(movierating.user_id) desc, users.name asc
    limit 1
)