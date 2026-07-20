let minSwaps= function(nums){
    let onesLength= 0;
    for(let i= 0; i<nums.length; i++){
        if(nums[i]==1){
            onesLength++;
        }
    }

    let slidingWindow= 0;  

    for(let i= 0; i<onesLength; i++){
        if(nums[i]==1){
            slidingWindow++;
        }
    } 
    let min= Math.min(onesLength-slidingWindow);
    let k= 0;
    let borderX2= nums.length*2;
    let border= nums.length;
    for(let i= onesLength; i<borderX2; i++){
        if(nums[i%border]==1){
            slidingWindow++;
        }
        if(nums[k%border]==1){
            slidingWindow--;
        }
        min= Math.min(onesLength-slidingWindow, min);
        k++;
    } 
    return min;         
};