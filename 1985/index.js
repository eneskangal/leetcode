let kthLargestNumber= function(nums, k){
    nums= nums.sort((a,b)=>{
        if(BigInt(a)<BigInt(b)){
            return 1;
        }
        else{
            return -1;
        }
    });
    return nums[k-1];    
};