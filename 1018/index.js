let prefixesDivBy5= function(nums){
    let data=[]
    let toplam=0n 
    let us
    let binaryToDecimalToBoolean=(element, i)=>{        
        if(element==1){            
            if(i==0){
                toplam=1n
                us=0n
                us++
                return false
            }
            else{
                toplam=toplam*(2n**us--)+1n
                if(BigInt(toplam%5n)==0n){
                    us++
                    return true
                }
                else{
                    us++
                    return false
                }
            }
        }
        else{
            if(i==0){
                us=0n
                us++
                return true
            }
            else{
                toplam=toplam*(2n**us--)+0n           
                if(BigInt(toplam%5n)==0n){
                    us++
                    return true
                }
                else{
                    us++
                    return false
                }
            }
        }        
    }
    for(let i=0; i<nums.length; i++){
        data.push(binaryToDecimalToBoolean(nums[i], i))
    }
    return data             
}