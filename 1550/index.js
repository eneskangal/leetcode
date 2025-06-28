let threeConsecutiveOdds = function(arr){   
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==1){
            if(arr[i+1]%2==1){
                if(arr[i+2]%2==1){
                    return true
                }
            }            
        }       
    }
    return false    
}