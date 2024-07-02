let matchPlayersAndTrainers= function(players, trainers){
    let count= 0;
    let index= 0;
    players= players.sort((a,b)=>{return a-b}); 
    trainers= trainers.sort((a,b)=>{return a-b});    
    for(let i= 0; i<trainers.length; i++){
        for(let k=index; k<players.length; k++){
            if(players[k]<=trainers[i]){
                count++;
                index= k+1;
                break;                
            }
        }
    } 
    return count;   
};