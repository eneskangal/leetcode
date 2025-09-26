let countMaxOrSubsets= function(nums){
   let scores= {};

    function backTracking(currentXor, index){
        for(let i= index; i<nums.length; i++){
            if(scores[currentXor|nums[i]]==undefined){
                scores[currentXor|nums[i]]= 1;
                backTracking(currentXor|nums[i], i+1);
            }
            else{
                scores[currentXor|nums[i]]+= 1;
                backTracking(currentXor|nums[i], i+1);
            }
        } 
    }
    for(let i= 0; i<nums.length; i++){
        if(scores[nums[i]]==undefined){
            scores[nums[i]]= 1;
            backTracking(nums[i], i+1);
        }
        else{
            scores[nums[i]]+= 1;
            backTracking(nums[i], i+1);
        }
    }    

    for(let prop in scores){
        score= scores[prop];
    }

    return score;
};