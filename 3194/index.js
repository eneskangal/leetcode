let minimumAverage= function(nums){
    let data= [];
    while(nums.length>0){
        let max= Math.max(...nums);
        let min= Math.min(...nums);
        nums.splice(nums.indexOf(max),1);
        nums.splice(nums.indexOf(min),1);
        data.push((max+min)/2);
    }    
    let min= 51;
    for(let i=0; i<data.length; i++){
        if(min>data[i]){
            min= data[i];
        }
    }
    return min;
};