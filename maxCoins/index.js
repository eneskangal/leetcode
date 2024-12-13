let maxCoins= function(piles){
    let sum= 0;
    let sortingPiles= piles.sort((a,b)=>{return b-a});
    let index= 1;    
    let reverseIndex= sortingPiles.length-1;
    while(index<reverseIndex){
        sum+= sortingPiles[index];
        reverseIndex--;
        index+= 2;     
    }
    return sum; 
};