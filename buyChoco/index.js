let buyChoco= function(prices, money){
    let firstMinPrices= Math.min(...prices);
    let index= prices.indexOf(firstMinPrices);
    prices.splice(index, 1);
    let secondMinPrices= Math.min(...prices);   
    if(money-(firstMinPrices+secondMinPrices)<0){
        return money;
    }
    else{
        return money-(firstMinPrices+secondMinPrices);
    }
};