let resultsArray= function(nums, k){
    let results= [];
    if(k==1){
        return nums;
    }
    for(let i= 0; i<=nums.length-k; i++){
        let last;
        for(let j= i; j<i+k; j++){
            if(i==j||last+1==nums[j]){
                last= nums[j];
                results[i]= last;
            }
            else{
                results[i]= -1;
                break;
            }
        }       
    } 
    return results;   
};