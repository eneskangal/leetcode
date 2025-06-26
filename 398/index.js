let Solution= function(nums){
    this.nums= nums;    
};


Solution.prototype.pick= function(target){
    let array= [];
    for(let i= 0; i<this.nums.length; i++){
        if(this.nums[i]==target){
            array.push(i);
        }
    }
    return array[Math.floor(Math.random()* array.length)];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */