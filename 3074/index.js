let minimumBoxes= function(apple, capacity){
    let sum= 0;

    for(let i= 0; i<apple.length; i++){
        sum+= apple[i];        
    }    

    capacity= capacity.sort((a,b)=>{
        return b-a;
    });

    let index= 0;
    let used= 0;
    while(sum>0){
        sum-= capacity[index];
        index++;  
        used++;      
    }

    return used;
};