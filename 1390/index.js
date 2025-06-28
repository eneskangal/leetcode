let sumFourDivisors= function(nums){
    let sum= 0;      
    for(let i=0; i<nums.length; i++){
        let count= 0;
        let isFalse= false;
        let last;
        for(let k=2; k<Math.floor(nums[i]/2)+1; k++){                    
            if(count==2){
                if(nums[i]%k==0){
                    count= 0;
                    isFalse= true;
                    break;
                }
            }
            else{                    
                if(nums[i]%k==0){
                    last= k;
                    count++;
                }
            }
        }
        if(isFalse==false&&count==2){
            sum+= 1;
            sum+= nums[i];
            sum+= last;
            sum+= nums[i]/last;
        }
    }
    return sum;
};