let maxFrequencyElements= function(nums){
    const obj= {};
    let max= 1;
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            if(obj["indexes"][obj[nums[i]]+1]==undefined){
                obj[nums[i]]+= 1;
                obj["indexes"][obj[nums[i]]]= {};
                obj["indexes"][obj[nums[i]]][nums[i]]= nums[i];
                delete obj["indexes"][obj[nums[i]]-1][nums[i]];        
                max= obj[nums[i]];          
            }
            else{            
                obj["indexes"][obj[nums[i]]+1][nums[i]]= nums[i];                              
                delete obj["indexes"][obj[nums[i]]][nums[i]]
                obj[nums[i]]+= 1;
            }                                             
        }
        else{
            obj[nums[i]]= 1;
            if(obj["indexes"]==undefined){
                obj["indexes"]= {};
                obj["indexes"][1]= {};
                obj["indexes"][1][nums[i]]= nums[i];                
            }
            else{
                obj["indexes"][1][nums[i]]= nums[i];
            }
              
        }
    }
    return Object.keys(obj["indexes"][max]).length*max;
};