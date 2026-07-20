let digitFrequencyScore= function(n){
    let ntoString= n+"";
    let hash= {};
    let point= 0;

    for(let i= 0; i<ntoString.length; i++){
        if(hash[ntoString[i]]==undefined){
            hash[ntoString[i]]= i;
            point+= ntoString[i]*1;
        }
        else{
            point+= ntoString[i]*1;
        }
    }    

    return point;
};