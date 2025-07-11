let bitwiseComplement= function(n){
    let toStringN= n.toString(2);
    let number= 0;
    let base= toStringN.length-1;
    for(let i= 0; i<toStringN.length; i++){
        if(toStringN[i]=="0"){
            number+= 2**base;
        }
        base--;
    }
    return number;    
};