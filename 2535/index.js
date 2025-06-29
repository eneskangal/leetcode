let differenceOfSum= function(nums){
    let ilkToplam=0
    let ikinciToplam=0
    let sayılarıBulma=(arr)=>{
        let splitYapma=arr+"".split("")
        let toplam=0
        for(let i=0; i<splitYapma.length; i++){
            toplam+=parseInt(splitYapma[i])            
        }
        return toplam
    }
    for(let i=0; i<nums.length; i++){
        ilkToplam+=nums[i]
        ikinciToplam+=sayılarıBulma(nums[i])
    }
    return ilkToplam-ikinciToplam    
}