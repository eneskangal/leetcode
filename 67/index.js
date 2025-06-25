let addBinary= function(a, b){
    let binaryToplama=function(arr1, arr2){
        let toplam=BigInt(0)
        let toplam2=BigInt(0)
        let us=BigInt(0)
        let us2=BigInt(0)
        for(let i=arr1.length-1; i>-1; i--){
            if(arr1[i]=="1"){
                toplam+=BigInt(2)**BigInt(us)                
            }
            BigInt(us++)
        }        
        for(let c=arr2.length-1; c>-1; c--){
            if(arr2[c]=="1"){
                toplam2+=BigInt(2)**BigInt(us2)               
            }
            BigInt(us2++)
        } 
        return BigInt(toplam+toplam2)               
    }    
    let binaryeDonusturme=function(arr1){          
        return BigInt(arr1).toString(2)                   
    }
    return binaryeDonusturme(binaryToplama(a,b))    
}