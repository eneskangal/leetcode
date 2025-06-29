let findClosestNumber= function(nums){
    let gosterim=nums[0]
    let sonuc=Math.abs(nums[0])
    for(let i=1; i<nums.length; i++){        
        if(nums[i]<0){
            if(sonuc>Math.abs(nums[i])&&sonuc>=nums[i]){
                sonuc=Math.abs(nums[i])
                gosterim=nums[i]
            }                              
        }
        else{
            if(sonuc>=nums[i]){
                sonuc=nums[i]
                gosterim=nums[i]                
            }
        }
    }
    return gosterim   
}