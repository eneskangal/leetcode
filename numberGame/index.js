let numberGame= function(nums){
    const arr= [];
    let i= 0;
    while(nums.length>0){
        let min= Math.min(...nums);
        let index= nums.indexOf(min);
        if(i%2==0){
           arr[i+1]= min;
           nums.splice(index,1); 
        }
        else{
            arr[i-1]= min;
            nums.splice(index,1); 
        }
        i++;
    }  
    return arr;
};