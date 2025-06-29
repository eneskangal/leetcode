let largestOddNumber= function(num){
    for(let i=num.length-1; i>-1; i--){
        if((num[i]*1)%2==1){
            return num.slice(0, i+1);
        }
    }
    return "";  
};