select id, 
case 
    when p_id is null then 'Root'
    when id= any(
        select p_id from tree
    ) then 'Inner'
    else 'Leaf'
end as type
from tree;