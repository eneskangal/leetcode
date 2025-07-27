let checkDivisibility= function(n){
    let ntoString= n+"";
    let sum= 0;
    let multiplaction= 1;
    for(let i= 0; i<ntoString.length; i++){
        sum+= ntoString[i]*1;
        multiplaction*= ntoString[i]*1;
    }   
    return n%(sum+multiplaction)==0; 
};