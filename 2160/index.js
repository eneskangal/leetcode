let minimumSum= function(num){
    nums= num+"";
    nums= nums.split("");
    nums= nums.sort().join("");

    return (nums[0]+nums[3]-0)+(nums[1]+nums[2]-0);
};