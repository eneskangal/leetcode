let minimumCardPickup= function(cards){
    let obj= {};
    let cardsLength= cards.length+1;
    let min= cardsLength;
    for(let i= 0; i<cardsLength; i++){
        if(obj[cards[i]]==undefined){
            obj[cards[i]]= i;
        }
        else{
            let diff= i-obj[cards[i]]+1; 
            if(min>diff){
                min= diff;                
            }
            else{
                obj[cards[i]]= i;
            }
        }
    }
    return min==cardsLength ? -1 : min;    
};