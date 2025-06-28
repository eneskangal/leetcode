select users.name, if(distance is null, 0, sum(rides.distance)) as travelled_distance from users
left join rides on users.id = rides.user_id
group by users.id
order by travelled_distance desc, name