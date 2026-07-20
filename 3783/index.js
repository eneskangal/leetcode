let mirrorDistance= function(n){
    let first= n+"";
    let second= "";

    for(let i= first.length-1; i>-1; i--){
        second+= first[i];
    }   

    return Math.abs(n-(second*1)); 
};