let isOneBitCharacter= function(bits){
    for(let i= 0; i<bits.length;){
        if(bits[i]==1){
            i+= 2;
        }
        else{
            if(i==bits.length-1){
                return true;
            }
            else{
                i++;
            }
        }
    }
    return false;    
};