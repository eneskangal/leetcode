let hIndex= function(citations){
    let max= 0;
    citations= citations.sort((a,b)=>{
        return b-a;
    });
    for(let i= 0; i<citations.length; i++){
        if(citations[i]>0&&i-(citations[i]-1)>-1){
            if(max<citations[i]){
                return citations[i];
            }
            else{
                return max;
            }
        }
        else if(citations[i]!=0){
            max= i+1;
        }
    }
    return max;    
};