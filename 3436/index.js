select user_id,
email
from users
where email ~ '^[a-zA-Z0-9_]+@[a-z]+\.com$'
order by user_id;