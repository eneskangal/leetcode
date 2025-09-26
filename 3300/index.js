let minElement= function(nums){
    for(let i= 0; i<nums.length; i++){
        let toString= nums[i]+"";
        let sum= 0;

        for(let k= 0; k<toString.length; k++){
            sum+= toString[k]*1;
        }

        nums[i]= sum;
    }   

    return Math.min(...nums); 
};