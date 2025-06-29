let equalFrequency= function(word){
    const obj= {};
    for(let i=0; i<word.length; i++){
        if(obj[word[i]]){
            obj[word[i]]+= 1;
        }
        else if(!obj[word[i]]){
            obj[word[i]]= 1;
        }        
    }
    const freArray= Object.values(obj).sort((a,b)=>{return b-a});   
    let fre= freArray[0];
    let isTrue= true;
    if(freArray.length==1||fre==1){
        return true;
    }
    const filterArray= freArray.filter((arr)=>arr==fre-1);
    const freFilterArray= freArray.filter((arr)=>arr==fre);
    const oneArray= freArray.filter((arr)=>arr==1);
    if(freFilterArray.length==1&&filterArray.length>=1){
        if(filterArray.length+1==freArray.length){
            return true;
        }
        else{
            return false;
        }
    }    
    if(freFilterArray.length>1){
        if(fre-1==1&&oneArray.length==1){
            return true;
        }
        else{
            if(filterArray.length>0){
                return false;
            }
        }
        if(oneArray.length==1){ 
            return true;                            
        }                  
    }
    if(freFilterArray.length==1&&oneArray.length==1){
        return true;            
    }    
    return false;              
};