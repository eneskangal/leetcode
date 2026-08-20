let countRatioSubarrays= function(nums, a, b){
    let count= 0;
    for(let i= 0; i<nums.length; i++){
        let x= 0;
        let y= 0;
        for(let k= i; k<nums.length; k++){
            if(nums[k]%2==1){
                y++;
            }
            else{
                x++;
            }
            if(y>0){
                if(x/y<= a/b){
                    count++;
                }
            }
        }
    } 

    return count;   
};