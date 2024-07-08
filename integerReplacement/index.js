let integerReplacement= function(n){
    let count= 0;
    if(n==1){
        return count;
    }
    if(n%2==0){
        count++;
        count+= integerReplacement(n/2);
    }
    else{
        count++;
        let firstCount= integerReplacement(n+1);
        let secondCount= integerReplacement(n-1);
        if(firstCount<=secondCount){
            count+= firstCount;
        }
        else{
            count+= secondCount;
        }
    }
    return count;    
};