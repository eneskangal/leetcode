let repeatedSubstringPattern= function(s){
    for(let i=1; i<=s.length/2; i++){
        let sliceS= s.slice(0, i);
        let repeatSliceS= Math.floor(s.length/sliceS.length);
        if(sliceS.repeat(repeatSliceS)==s){
            return true;
        }
    }
    return false;    
};