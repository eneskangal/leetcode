let minMoves2= function(nums){
    nums= nums.sort((a,b)=>{
        return a-b;
    });
    let numsLength= nums.length;
    if(numsLength%2==1){
        let limit= Math.trunc(numsLength/2);
        let count= 0;
        for(let i= 0; i<numsLength; i++){
            if(limit!=i){
                count+= Math.abs(nums[i]-nums[limit]);
            }
        }
        return count;
    }
    else{
        let limit= numsLength/2;
        let count= 0;
        let count2= 0;
        for(let i= 0; i<numsLength; i++){            
            if(limit!=i||limit-1!=i){
                count+= Math.abs(nums[i]-nums[limit]);
                count2+= Math.abs(nums[i]-nums[limit-1]);
            }
        }        
        return count>count2 ? count2 : count;
    }    
};