let smallestIndex= function(nums){
    for(let i= 0; i<nums.length; i++){
        let translate= nums[i]+"";
        let sum= 0;
        for(let k= 0; k<translate.length; k++){
            if(sum+(translate[k]-0)>i){
                sum+= translate[k]-0;
                break;
            }
            else{
                sum+= translate[k]-0;
            }
        }
        if(sum==i){
            return i;
        }
    }     
    return -1;
};