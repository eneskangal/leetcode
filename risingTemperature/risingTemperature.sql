select id from Weather as Cuguli
WHERE temperature >
(
    select temperature from Weather
    WHERE Weather.recordDate=Cuguli.recordDate-1 
);