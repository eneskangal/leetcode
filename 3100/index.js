let maxBottlesDrunk= function(numBottles, numExchange){
  let full= numBottles;
  let empty= 0;
  let count= 0;

  while(true){
    if(full>0){
        count+= full;
        empty+= full; 
        full= 0;               
    }
    else if(empty>= numExchange){
        empty-= numExchange;
        full+= 1;   
        numExchange++;                             
    }
    else{
        return count;
    }
  }     
};