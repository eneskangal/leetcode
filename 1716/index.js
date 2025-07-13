let totalMoney= function(n, first= 0){
    if(n>7){
        return 28+first+totalMoney(n-7,first+7);
    }
    else{
        let remain= first/7;
        let sum= 0;
        for(let i= remain+1; i<=remain+n; i++){
            sum+= i;
        }
        return sum;
    }    
};