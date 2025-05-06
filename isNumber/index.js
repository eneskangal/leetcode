let isNumber = function(s){
    if(s=="Infinity"||s=="-Infinity"||s=="+Infinity"){
        return false;
    }
    return !isNaN(s);  
};