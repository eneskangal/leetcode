let rangeSum= function(nums, n, left, right){
    let data= [];
    for(let i= 0; i<nums.length; i++){
        let prefix= 0;
        for(let k= i; k<nums.length; k++){
            data.push(prefix+nums[k]);
            prefix+= nums[k];
        }
    }    

    data= data.sort((a,b)=>{
        return a-b;
    });

    let sum= 0;
    for(let i= left-1; i<right; i++){
        sum+= data[i];
    }

    return (sum)%((10**9)+7);
};