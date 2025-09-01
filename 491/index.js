let findSubsequences= function(nums){
    let results= [];
    let hash= {};
    function recFunc(array, startIndex, index){           
        for(let i= startIndex; i<nums.length; i++){        
            if(array[index]<=nums[i]){                
                let arrayConcat= [...array, nums[i]];
                if(hash[arrayConcat]==undefined){
                    hash[arrayConcat]= 1;
                    results.push(arrayConcat);
                    recFunc(arrayConcat, i+1, index+1);
                }                
            }                  
        }
    }

    for(let i= 0; i<nums.length; i++){
        recFunc([nums[i]], i+1, 0);                  
    }
    return results;     
};