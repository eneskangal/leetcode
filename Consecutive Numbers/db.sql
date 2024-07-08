select num as consecutivenums  from logs
where logs.num= (
    select db.num from logs as db
    where db.id= logs.id+1
) and logs.num=(
    select db2.num from logs as db2
    where db2.id= logs.id+2
)
group by num;