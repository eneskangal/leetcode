let sumIndicesWithKSetBits= function(nums, k){
    let sumValue= 0;
    for(let i=0; i<nums.length; i++){
        const sonuc= i.toString(2).match(/[1]/g);        
        if(sonuc!=null&&sonuc.length==k||sonuc==null&&k==0){
            sumValue+= nums[i];
        }        
    }
    return sumValue;    
};