let integerBreak= function(n){
    let sum= 1;
    if(n==3){
        return 2;
    }
    while(n>0){
        if(n==2){
            if(sum>1){
                return sum*n;
            }
            else{
                return sum;
            }
        }
        else if(n==4){
            return sum*4;
        }
        else{
            sum*= 3;
            n-= 3;
        }
    }
    return sum;    
};