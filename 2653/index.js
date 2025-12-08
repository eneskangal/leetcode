let getSubarrayBeauty= function(nums, k, x){
    const n= nums.length;
    const freq= Array(51).fill(0);
    const res = [];

    for(let i= 0; i<k; i++){
        if(nums[i]<0){
            freq[nums[i]+50]++;
        }
    }

    function getXthNegative(){
        let count= 0;
        for(let v= 0; v<50; v++){
            count+= freq[v];
            if(count >= x){
                return v-50;
            }
        }
        return 0;
    }

    res.push(getXthNegative());

    for(let i= k; i<n; i++){
        if(nums[i-k]<0){
            freq[nums[i-k]+50]--;
        }

        if(nums[i]<0){
            freq[nums[i]+50]++;
        }
        res.push(getXthNegative());
    }
    return res;
};