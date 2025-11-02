let maxContainers= function(n, w, maxWeight){
    let count= 0;
    for(let i= 0; i<n; i++){
        for(let k= 0; k<n; k++){
            if(maxWeight>=w){
                count++;
                maxWeight-= w;
            }
            else{
                return count;
            }
        }
    } 

    return count;   
};