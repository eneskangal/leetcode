with first_login as(
    select player_id, min(event_date) as first_day
    from activity
    group by player_id
)

select round(count(*)::decimal / (select count(*) from first_login),2) as fraction
from first_login f
join activity a 
on f.player_id= a.player_id 
where a.event_date= f.first_day + INTERVAL '1 day';