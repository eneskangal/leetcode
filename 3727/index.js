let maxAlternatingSum= function(nums){
    nums= nums.sort((a,b)=>{
        return Math.abs(b)-Math.abs(a);
    });
    let sum= 0;
    let left= 0
    let right= nums.length-1;
    
    if(nums.length%2==0){      
        while(right>left){
            sum+= nums[left]**2;
            sum-= nums[right]**2;  
            left++;
            right--;       
        }
    }
    else{
        while(right>=left){
            if(right>left){
                sum+= nums[left]**2;
                sum-= nums[right]**2;  
                left++;
                right--; 
            }    
            else{
                sum+= nums[left]**2;
                left++;
            }  
        }
    }
    return sum;  
};