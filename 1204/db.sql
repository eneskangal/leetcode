SELECT person_name
FROM(
    SELECT
        person_name,
        weight,
        SUM(weight) OVER (ORDER BY turn) AS cumulative_weight
    FROM queue
) AS sub
WHERE cumulative_weight <=1000
ORDER BY cumulative_weight DESC
LIMIT 1;