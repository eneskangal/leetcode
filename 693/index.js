let hasAlternatingBits= function(n){
    return n.toString(2).indexOf("00")==-1&&n.toString(2).indexOf("11")==-1;    
};