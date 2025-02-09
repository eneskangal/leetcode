let wordSubsets= function(words1, words2){
    let obj= {};
    let data= [];
    for(let i= 0; i<words2.length; i++){
        let subObj= {};
        for(let j= 0; j<words2[i].length; j++){
            if(subObj[words2[i][j]]==undefined){
                subObj[words2[i][j]]= 1;                                           
            }
            else{
                subObj[words2[i][j]]+= 1; 
            }                                
        }
        for(let prop in subObj){
            if(obj[prop]<subObj[prop]){                
                obj[prop]= subObj[prop];
            }
            else if(obj[prop]==undefined){
                obj[prop]= subObj[prop];
            }
        }
    }
    for(let i= 0; i<words1.length; i++){
        let copy= {...obj};   
        for(let j= 0; j<words1[i].length; j++){                           
            if(obj[words1[i][j]]!=undefined){                      
                if(obj[words1[i][j]]==1){
                    delete obj[words1[i][j]];
                }
                else{
                    obj[words1[i][j]]-= 1;
                }            
            }
        }            
        if(Object.keys(obj).length==0){
            data.push(words1[i]);
        }
        obj= {...copy};   
    }
    return data;    
};