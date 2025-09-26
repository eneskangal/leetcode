function numSubseq(nums, target){
    const MOD= 1e9 + 7;
    nums.sort((a, b) => a - b);

    const n= nums.length;
    const pow2= new Array(n).fill(1);


    for(let i= 1; i<n; i++){
        pow2[i]= (pow2[i-1]*2)%MOD;
    }

    let left= 0, right= n-1;
    let result= 0;

    while(left <= right){
        if(nums[left]+nums[right]<=target){
            result= (result+pow2[right - left])% MOD;
            left++;
        } 
        else{
            right--;
        }
    }
    return result;
}