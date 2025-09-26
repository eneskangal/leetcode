function minBitwiseArray(nums){
  const ans= [];
  for(let num of nums){
    let found= false;
    for(let a= 0; a<=num; a++){
      if((a|(a+1))===num){
        ans.push(a);
        found= true;
        break;
      }
    }
    if(!found){
      ans.push(-1);
    }
  }
  return ans;
}