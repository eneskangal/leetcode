let minChanges= function(n, k){
    let convertN= n.toString(2);  
    let convertK= k.toString(2);
    

    if(convertN.length>convertK.length){
        convertK= k.toString(2).padStart(convertN.length, "0");  
    }
    else{
        convertN= n.toString(2).padStart(convertK.length, "0");
    }

    let count= 0;
    for(let i= 0; i<convertN.length; i++){
        if(convertN[i]!=convertK[i]){
            if(convertN[i]==1){
                count++;
            }
            else{
                return -1;
            }
        }
    }

    return count;
};