let countSubstrings= function(s, c){
    let count= 0;
    let length= 0;
    for(let i= 0; i<s.length; i++){
        if(s[i]==c){
            if(count==0){
                count++;
                length++;
            }
            else{
                count+= length+1;
                length++;
            }
        }
    }    
    return count;
};