let partitionString= function(s){
    let obj= {};
    let count= 0;
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]= s[i];
        }
        else{
            count++;
            obj= {};
            obj[s[i]]= s[i];
        }
    }
    return count+1;    
};