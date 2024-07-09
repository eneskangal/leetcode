let makeFancyString= function(s){
    let string= "";
    let count= 0;
    for(let i=0; i<s.length; i++){
        if(s[i]==s[i+1]){
            count++;    
            if(count<2){  
                string+= s[i];                              
            }        
        }
        else{
            count= 0;
            string+= s[i]; 
        }
    }
    return string;
};