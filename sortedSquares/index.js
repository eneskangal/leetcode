let sortedSquares= function(nums){
    const array= [];
    for(let i=0; i<nums.length; i++){
       array.push(nums[i]**2)
    }
    return array.sort((a,b)=>{
        return a-b;
    });
};