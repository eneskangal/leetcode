let sumOfNumberAndReverse= function(num){    
    for(let i= 0; i<=num; i++){
        let reverseI= i.toString().split("").reverse().join("");
        if(i+parseInt(reverseI)==num){
            return true;
        }
    }
    return false;    
};