let lastNonEmptyString= function(s){
    let obj= {};
    let max;
    for(let i= 0; i<s.length; i++){
        if(obj[s[i]]==undefined){
            if(i==0){
                obj[1]= {};  
                obj[s[i]]= {count: 1, index:i};  
                obj[1][s[i]]= {count: 1, index:i};       
                max= 1; 
            }
            else{ 
                obj[s[i]]= {count: 1, index:i};  
                obj[1][s[i]]= {count: 1, index:i};       
            }
                  
        }
        else{
            let long= obj[s[i]].count;
            if(obj[long+1]==undefined){
                obj[long+1]= {};  
                obj[long+1][s[i]]= {count: long+1, index:i};     
                obj[s[i]].count+= 1;   
                obj[s[i]].index= i;    
                max= long+1;
                delete obj[long][s[i]];
            }
            else{
                obj[long+1][s[i]]= {count: long+1, index:i};  
                obj[s[i]].count+= 1;   
                obj[s[i]].index= i;   
                delete obj[long][s[i]]; 
            }             
        }
    } 
    let results= "";
    for(let prop in obj[max]){
        results+= s[obj[max][prop]["index"]];
    }        

    return results;
};