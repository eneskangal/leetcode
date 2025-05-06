let countNumbersWithUniqueDigits= function(n){
    let obj= {"0": 1, "1":10};  
    if(obj[n]){
        return obj[n];
    }
    for(let i= 2; i<n+1; i++){
        let calc= 1;
        for(let k= i; k>0; k--){
            if(k==1){
                calc*= 9;
                obj[i]= obj[i-1]+calc;            
            }
            else{
                calc*= 10-(k-1);             
            }
        }
    }   
    return obj[n];
};