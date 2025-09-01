let subsetsWithDup= function(nums){
    let results= [[]];
    let hash= {};
    nums.sort();
    function recFunc(array, startIndex){             
        for(let i= startIndex; i<nums.length; i++){
            let arrayConcat= [...array, nums[i]];
            if(hash[arrayConcat]==undefined){
                hash[arrayConcat]= 1;
                results.push(arrayConcat);
                recFunc(results[results.length-1], i+1);
            }    
            else{
                recFunc(arrayConcat, i+1);
            }        
                            
        }
    }

    for(let i= 0; i<nums.length; i++){
        if(hash[nums[i]]==undefined){
            hash[nums[i]]= 1;
            results.push([nums[i]]);
            let recursive= recFunc(results[results.length-1], i+1);  
        }        
        else{
            let recursive= recFunc([nums[i]], i+1);  
        }              
    }

    return results;    
};