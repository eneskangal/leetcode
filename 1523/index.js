let countOdds = function(low, high){
    let count=0
    for(let i=low; i<=high; i++){
        if(i%2==1){
            count++
        }
    }
    return count    
}