let maxCount= function(banned, n, maxSum){
    let hash= {};
    for(let i= 0; i<banned.length; i++){
        hash[banned[i]]= true;
    }

    let sum= 0;
    let count= 0;
    for(let i=1; i<=n; i++){
        if(hash[i]==undefined){
            if(sum+i<=maxSum){
                count++;
                sum+= i;
            }
            else{
                return count;
            }
        }
    } 
    return count;   
};