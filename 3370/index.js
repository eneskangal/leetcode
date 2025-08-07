let smallestNumber= function(n){
    let ntoBinary= n.toString(2);
    return parseInt("1".repeat(ntoBinary.length),2);    
};