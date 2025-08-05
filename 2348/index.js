let zeroFilledSubarray= function(nums){
    let subCount= 0;
    let count= 0;
    let piece= 1;

    for(let i= 0; i<nums.length; i++){
        if(nums[i]==0){
            if(subCount>0){  
                subCount+= piece-1; 
                subCount++; 
                piece++;                          
            }
            else{
                subCount++;
                piece++;
            }
        }
        else{
            count+= subCount;
            subCount= 0;
            piece= 1;
        }
    } 
    return count+subCount;   
};