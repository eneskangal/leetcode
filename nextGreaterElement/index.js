let nextGreaterElement= function(n){
    let ntoString= n+"";
    ntoString= ntoString.split("");
    for(let i= ntoString.length-2; i>-1; i--){
        for(let k= ntoString.length-1; k>i; k--){            
            if(ntoString[i]<ntoString[k]){
                let copy= ntoString[i];
                ntoString[i]= ntoString[k];
                ntoString[k]= copy;
                let sortArray= ntoString.slice(i+1).sort((a,b)=>{
                    return a-b;
                });
                let number= (ntoString.slice(0, i+1).join("")+sortArray.join(""))*1;
                return number<2**31 ? number : -1;
            }       
        }    
    }
    return -1;
};