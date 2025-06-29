let minPairSum= function(nums){
    let sortNums= nums.sort((a,b)=>{return a-b});
    let max= -(2**31);
    let lastIndex= sortNums.length-1;
    for(let i=0; i<sortNums.length/2; i++){
        if(max<sortNums[i]+sortNums[lastIndex]){
            max= sortNums[i]+sortNums[lastIndex]; 
        }
        lastIndex--;
    } 
    return max;
};