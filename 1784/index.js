let checkOnesSegment= function(s){ 
    let limit= 1;   
    for(let i=0; i<s.length; i++){
        if(s[i]==1){
            if(s[i+1]!=1){
                if(limit==1){
                    limit--;
                }
                else{
                    return false;
                }
            }
        }        
    }    
    if(limit==0){
        return true;
    }
};