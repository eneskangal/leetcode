function minSubArrayLen(target, nums){
  let left= 0;
  let total= 0;
  let minLen= Infinity;

  for(let right= 0; right<nums.length; right++){
    total+= nums[right];

    while(total>=target){
      minLen= Math.min(minLen, right-left+1);
      total-= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}