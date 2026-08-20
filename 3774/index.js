let absDifference= function(nums, k){
    nums= nums.sort((a,b)=>{
        return b-a;
    });

    let reverseIndex= nums.length-1;
    let largestSum= 0;
    let smallestSum= 0;
    
    for(let i= 0; i<k; i++){
        largestSum+= nums[i];
        smallestSum+= nums[reverseIndex];
        reverseIndex--;
    }  

    return largestSum-smallestSum;  
};