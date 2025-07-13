let backspaceCompare= function(s, t){
    let splitS= s.split("");
    for(let i= 0; i<splitS.length;){        
        if(splitS[i]=="#"){
            if(i==0){
                splitS.splice(i, 1);
                i-= 1;
            }
            else{
                splitS.splice(i, 1);
                splitS.splice(i-1, 1);
                i-= 1;                
            }
        }
        else{
            i++;
        }
    }    
    let splitT= t.split("");
    for(let i= 0; i<splitT.length;){
        if(splitT[i]=="#"){
            if(i==0){
                splitT.splice(i, 1);
                i-= 1;
            }
            else{
                splitT.splice(i, 1);
                splitT.splice(i-1, 1);
                i-= 1;                
            }
        }
        else{
            i++;
        }
    }
    let joinS= splitS.join("");  
    let joinT= splitT.join(""); 
    return joinS==joinT;
};