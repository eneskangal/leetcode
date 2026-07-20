select 
    anotherdb.user_id, 
    round(avg(useractivity.activity_duration), 2) as trial_avg_duration,
    round(avg(anotherdb.activity_duration), 2) as paid_avg_duration from useractivity as anotherdb
inner join useractivity on anotherdb.user_id= useractivity.user_id
where anotherdb.activity_type= 'paid' and useractivity.activity_type= 'free_trial'
group by anotherdb.user_id
