let maxAscendingSum= function(nums){
    let max= 0;
    for(let i= 0; i<nums.length; i++){
        let subMax= 0;
        for(let k= i; k<nums.length; k++){
            if(nums[k]<nums[k+1]){
                subMax+= nums[k];                
            }
            else{
                max= Math.max(max, subMax+nums[k]);
                break;
            }        
        }  
        max= Math.max(max, subMax); 
    }    
    return max;
};