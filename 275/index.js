let hIndex= function(citations){
    let max= 0;
    citations= citations.sort((a,b)=>{
        return b-a;
    });
    for(let i= 0; i<citations.length; i++){
        if(citations[i]-1>=i){
            max= i+1;
        }
    }
    return max;    
};