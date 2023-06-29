let findKthPositive= function(arr, k){    
    let data=[]
    let c=1
    while(data.length<k){        
        if(arr.includes(c)==false){
            data.push(c)
        }
        c++        
    }    
    return data[data.length-1]   
}
console.log(findKthPositive([2,3,4,7,11],5))