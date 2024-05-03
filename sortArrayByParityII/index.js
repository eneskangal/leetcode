let sortArrayByParityII= function(nums){
   let even= 0;
   let odd= 1;
   const array= []; 
   for(let i=0; i<nums.length; i++){
       if(nums[i]%2==0){
           array[even]= nums[i];
           even= even+2; 
       }
       else{
           array[odd]= nums[i];
           odd= odd+2;
       }       
   }
   return array;
};