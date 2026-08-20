let validDigit= function(n, x){
    n= n+"";
    let isFirst= false;

    for(let i= 0; i<n.length; i++){
        if(n[i]==x){
            if(i==0){
                return false;
            }
            isFirst= true;
        }
    }
    if(isFirst==true){
        return true;
    }   
    return false;
};