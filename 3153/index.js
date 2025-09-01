function sumDigitDifferences(nums){
  const n= nums.length;
  const d= nums[0].toString().length;
  const counts= Array.from({ length: d }, () => Array(10).fill(0));

  for(const num of nums){
    const digits= num.toString();
    for(let i = 0; i < d; i++){
      const digit= parseInt(digits[i]);
      counts[i][digit]++;
    }
  }

  let total = 0;

  for(let i= 0; i<d; i++){
    const count= counts[i];
    for(let x= 0; x<10; x++){
      for(let y= 0; y<10; y++){        
        if(x!==y){
          total+= count[x] * count[y];
        }
      }
    }
  }

  return total/2; 
}