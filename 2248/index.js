let intersection= function(nums){
  let intersections= [];
  let hash= {};
  let numsLength= nums.length;
  if(nums[1]==undefined){
    return nums[0].sort((a,b)=>{
      return a-b;
    });
  }
  for(let i= 0; i<numsLength; i++){
    for(let k= 0; k<nums[i].length; k++){
      if(hash[nums[i][k]]==undefined){
        hash[nums[i][k]]= 1;
      }    
      else{
        if(hash[nums[i][k]]==numsLength-1){
          intersections.push(nums[i][k]);
          hash[nums[i][k]]++;
        }
        else{
          hash[nums[i][k]]++;
        }
      }
    }    
  } 
  return intersections.sort((a,b)=>{
    return a-b;
  });   
};