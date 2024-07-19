let bulbSwitch= function(n){
    let s= Math.sqrt(n);
    if(s.toString().indexOf(".")>-1){
        return bulbSwitch(n-1);
    }
    else{
        return s;
    }
};