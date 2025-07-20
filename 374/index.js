let guessNumber= function(n){
    let left= 1;
    let right= n;
    let mid= Math.trunc((right+left)/2);
    let result= guess(mid);
    while(result!=0){      
        if(result==1){
            left= mid+1;
            mid= Math.trunc((right+left)/2);
            result= guess(mid);
        }
        else{
            right= mid-1;
            mid= Math.trunc((right+left)/2);
            result= guess(mid);       
        }
    }
    return mid;  
};