let twoEditWords= function(queries, dictionary){
    let array= [];
    for(let a= 0; a<queries.length; a++){        
        for(let b= 0; b<dictionary.length; b++){    
            let count= 0;       
            for(let c= 0; c<dictionary[b].length; c++){
                if(queries[a][c]!=dictionary[b][c]){
                    count++;
                }                     
            }  
            if(count<=2){
                array.push(queries[a]);
                break;
            }                    
        }               
    }   

    return array;
};