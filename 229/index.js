let majorityElement= function(nums){
    let obj= {};
    let max= 0;
    for(let i= 0; i<nums.length; i++){
        if(obj[nums[i]]!=undefined){
            if(obj["indexes"][obj[nums[i]]+1]==undefined){
                obj["indexes"][obj[nums[i]]+1]= {};
                obj[nums[i]]+= 1;
                obj["indexes"][obj[nums[i]]][nums[i]]= nums[i];
                delete obj["indexes"][obj[nums[i]]-1][nums[i]];
                max+= 1;
            }
            else{
                obj[nums[i]]+= 1;
                obj["indexes"][obj[nums[i]]][nums[i]]= nums[i];
                delete obj["indexes"][obj[nums[i]]-1][nums[i]];
            }            
        }
        else{
            if(obj["indexes"]==undefined){
               obj["indexes"]= {};
               if(obj["indexes"][1]==undefined){
                obj["indexes"][1]= {};
                obj[nums[i]]= 1;
                obj["indexes"][1][nums[i]]= nums[i];
                max= 1;
               }
            }
            else{
                if(obj["indexes"][max]==undefined){
                    obj["indexes"][1]= {};
                    obj[nums[i]]= 1;
                    obj["indexes"][1][nums[i]]= nums[i];
                }
                else{
                    obj[nums[i]]= 1;
                    obj["indexes"][1][nums[i]]= nums[i];
                }                            
            }
        }
    } 
    if(nums.length/3<max){
        let data= [];
        while(nums.length/3<max){
            data.push(Object.keys(obj["indexes"][max])); 
            max--;           
        }
        return data.flat();
    }
    return [];
};