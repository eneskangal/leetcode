let isAdjacentDiffAtMostTwo= function(s){
    for(let i= 0; i<s.length-1; i++){
        if(Math.abs(s[i]-s[i+1])>2){
            return false;
        }
    }  

    return true;  
};