let checkIfExist= function(arr){
    let data=[]
    for(let i=0; i<arr.length; i++){        
        if(data.includes(arr[i])){
            return true
        }
        else{
            data.push(arr[i]/2)
            data.push(arr[i]*2)
        }
    }
    return false   
}
console.log(checkIfExist([10,2,5,3]))