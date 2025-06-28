select tweet_id from tweets
where content IN (select content from tweets
    group by content
    having length(content)>15
    order by content asc
)







