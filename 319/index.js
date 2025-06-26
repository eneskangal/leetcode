let bulbSwitch= function(n){
    let s= Math.sqrt(n);
    if(s.toString().indexOf(".")>-1){
        for(let i= n-1; i>0;  i--){            
            let result= Math.sqrt(i);
            if(result.toString().indexOf(".")==-1){
                return result;
            }            
        }
    }
    else{
        return s;
    }
};