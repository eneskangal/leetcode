let largestGoodInteger= function(num){
    let number= "";
    for(let i=0; i<num.length; i++){
        if(num[i]==num[i+1]){
            if(num[i]==num[i+2]){
                if(num[i+1]==num[i+2]){
                    if(number<=num[i].repeat(3)){
                        number= num[i].repeat(3);
                    }
                }
            }            
        }
    }
    return number;
};