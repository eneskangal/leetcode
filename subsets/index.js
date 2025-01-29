let subsets= function(nums){
    let results= [];
    function subset(startArray,startIndex){      
        for(let i= startIndex; i<nums.length; i++){
            results.push(subset([...startArray, nums[i]], i+1));            
        }  
        return startArray;              
    }
    
    for(let i= 0; i<nums.length; i++){
        results.push(subset([nums[i]],i+1))
    }  
    return [[], ...results];   
};