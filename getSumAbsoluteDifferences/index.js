let getSumAbsoluteDifferences= function(nums){
    const initialValue = 0;
    let data= [];
    let sum= 0;  
    let finalSum= nums.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
    for(let i= 0; i<nums.length; i++){
        if(i==0){
            data[i]= Math.abs(
                (finalSum-nums[i]-(nums[i]*((nums.length-1)-i)))                
            );
            sum+= nums[i];
            finalSum-= nums[i];            
        }
        else if(i+1==nums.length){
            data[i]= Math.abs(
                (-1*(nums[i]*(nums.length-1)))+(sum)               
            );
            sum+= nums[i];
            finalSum-= nums[i];             
        }
        else{
            data[i]= Math.abs(
                (((-1*(nums[i]*i))+sum)-((finalSum-nums[i])-(nums[i]*((nums.length-1)-i))))              
            );
            sum+= nums[i];
            finalSum-= nums[i];    
        }
    };
    return data; 
};