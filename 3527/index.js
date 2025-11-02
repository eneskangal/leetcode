let findCommonResponse= function(responses){
    let hash= {};
    let max;

    for(let i= 0; i<responses.length; i++){        
        for(let k= 0; k<responses[i].length; k++){
            if(hash[responses[i][k]]==undefined){
                hash[responses[i][k]]= {index: i, count:1};
                if(max==undefined){
                    max= hash[responses[i][k]];
                }                
            }
            else{                
                if(hash[responses[i][k]]["index"]!=i){
                    hash[responses[i][k]]["count"]++; 
                    hash[responses[i][k]]["index"]= i;
                    if(hash[responses[i][k]]["count"]>max["count"]){                        
                        max=  hash[responses[i][k]];
                    }                                                     
                }
            }            
        }  
    }

    let returnString;
    for(let prop in hash){
        if(max["count"]==hash[prop]["count"]){
            if(returnString==undefined){
                returnString= prop;
            }        
            else{
                if(returnString>prop){
                    returnString= prop;                    
                }
            }   
        }
    }

    return returnString;
};