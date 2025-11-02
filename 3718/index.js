let missingMultiple= function(nums, k){
    nums= nums.sort((a,b)=>{
        return a-b;
    });

    let copyK= k;
    let number= 1;
    for(let i= 0; i<nums.length; i++){
        if(k==nums[i]){
            number++;
            k= copyK*number;
        }
    }  
    return k;
};