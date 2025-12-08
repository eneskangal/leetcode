function minOperationsToMakeMedianK(nums, k){
  nums.sort((a, b) => a - b);
  const n= nums.length;
  const mid= Math.floor(n/2);
  let operations= 0;

  if(nums[mid]>k){
    for(let i= mid; i>=0; i--){
      if (nums[i]>k) operations += nums[i]-k;
      else break;
    }
  } 
  else{
    for(let i= mid; i<n; i++){
      if(nums[i]<k) operations += k-nums[i];
      else break;
    }
  }
  return operations;
}