let partitionArray= function(nums, k){
    let count= 0;

    nums= nums.sort((a,b)=>{
        return b-a;
    });

    let biggest= 0;
    for(let i= 0; i<nums.length; i++){
        if(biggest==0){
            biggest= nums[i];
        }
        else{
            if(biggest-nums[i]>k){
                biggest= nums[i];
                count++;
            }
        }
    }    
    return count+1;
};