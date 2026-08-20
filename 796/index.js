let rotateString= function(s, goal){
    for(let i= 0; i<s.length; i++){
        if(s.slice(i+1)+s.slice(0, i+1)==goal){
            return true;
        }      
    }
    return false;    
};