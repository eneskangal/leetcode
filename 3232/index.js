let canAliceWin= function(nums){
    let one= 0;
    let double= 0;

    for(let i= 0; i<nums.length; i++){
        if(nums[i]<10){
            one+= nums[i];
        }
        else{
            double+= nums[i];
        }
    }    
    if(double>one){
        return true;
    }
    else if(double<one){
        return true;
    }
    return false;
};