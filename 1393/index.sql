# Write your MySQL query statement below
select stock_name,
sum(price)-
(
    select sum(price)
    from stocks as aliasTable
    where operation='buy' and stocks.stock_name=aliasTable.stock_name   
) 
as capital_gain_loss from stocks
where operation='sell'
group by stock_name;