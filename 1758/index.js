let minOperations= function(s){
    let count= 0;
    let count2= 0;
    let first= true;
    let second= false;
    
    for(let i= 0; i<s.length; i++){
        if(s[i]!=first){
            count++; 
        }
        if(s[i]!=second){
            count2++; 
        }
        second= !second;  
        first= !first;      
    }

    return count>count2 ? count2 : count;
};