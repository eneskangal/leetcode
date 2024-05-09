let productExceptSelf= function(nums){
    const copyNums= [...nums];
    const multiply= nums.reduce((a,b)=>{
        return a*b;
    }, 1);
    for(let i=0; i<nums.length; i++){
        if(nums[i]==0){
            let anotherMultiply= 1;
            let count= 0;
            for(let j=0; j<copyNums.length; j++){
                if(i!=j){
                    anotherMultiply*= copyNums[j];
                    count++;
                }
            }
            nums[i]= anotherMultiply==1&&count==0 ? nums[i]  : anotherMultiply;
        }
        else{
            nums[i]= multiply/nums[i];
        }
    }
    return nums;
};