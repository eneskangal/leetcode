function originalDigits(s){
  const count= new Array(10).fill(0);
  const charCount= {};

 
  for(let char of s){
    charCount[char]= (charCount[char]||0)+1;
  }

  count[0]= charCount['z']||0;
  count[2]= charCount['w']||0;
  count[4]= charCount['u']||0;
  count[6]= charCount['x']||0;
  count[8]= charCount['g']||0;

  count[3]= (charCount['h']||0)-count[8];
  count[5]= (charCount['f']||0)-count[4];
  count[7]= (charCount['s']||0)-count[6];
  count[1]= (charCount['o']||0)-count[0]-count[2]-count[4];
  count[9]= (charCount['i']||0)-count[5]-count[6]-count[8];

  let result= '';
  for (let i = 0; i <= 9; i++) {
    result+= i.toString().repeat(count[i]);
  }

  return result;
}