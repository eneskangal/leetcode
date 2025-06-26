let toHex= function(num){
    if(num>-1){
        return num.toString(16);
    }
    else{
        let result= 4294967295-Math.abs(num+1);
        return result.toString(16);
    }
};