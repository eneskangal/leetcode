let groupThePeople= function(groupSizes){
    const array= [];
    for(let i=0; i<groupSizes.length; i++){
        if(array.length<1){
            array.push([i]);
        }
        else{
            let isFull= false;
            for(let k=0; k<array.length; k++){           
                if(array[k].length<groupSizes[i]){
                    if(groupSizes[array[k][0]]==groupSizes[i]){                        
                        array[k].push(i);
                        break;
                    }
                    else if(k==array.length-1){
                        isFull= true;
                        break; 
                    }                                                                               
                }
                else if(k==array.length-1){
                   isFull= true;
                   break; 
                }                
            }
            if(isFull){                
                array.push([i]);                               
            }
        }       
    }  
    return array;  
};