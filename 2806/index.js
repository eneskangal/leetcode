let accountBalanceAfterPurchase= function(purchaseAmount){
    if(purchaseAmount<=10){
        let diff= 10-purchaseAmount;
        let diff2= Math.abs(0-purchaseAmount);
        return 100-(diff>diff2 ? 0 : 10);
    }
    else{
        let diff= purchaseAmount%10;
        let diff2= 10-diff;        
        return 100-(diff>=diff2 ? purchaseAmount+diff2 : purchaseAmount-diff);
    }    
};