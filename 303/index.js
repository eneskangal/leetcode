let NumArray= function(nums){
    this.array= [];
    for(let i=0; i<nums.length; i++){
        if(i==0){
            this.array[i]= nums[i];
        }
        else{
            this.array[i]= this.array[i-1]+nums[i];            
        }
    }    
};

NumArray.prototype.sumRange= function(left, right){
    if(left==0){
        return this.array[right];
    }    
    else{
        return this.array[right]-this.array[left-1];
    }
};