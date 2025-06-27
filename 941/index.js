let validMountainArray= function(arr){
    let index
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=arr[i+1]&&i+1!=arr.length-1){
            index=i+1
            break            
        }
        if(arr[i]>=arr[i+1]&&i+1==arr.length-1){
            if(arr[i]>arr[i+1]){
                index=i+1
                break                
            }
            return false     
        }
    }
    for(let c=index; c<arr.length; c++){
        if(arr[c]<=arr[c+1]){
            return false
        }                
    }
    return arr.length>2&&index!=undefined&&index>1 ? true : false
}