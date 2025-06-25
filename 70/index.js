let climbStairs= function(n){
    let data=[1,2,3,5,8,13]
    if(data[n-1]==undefined){
        for(let i=data.length-1; i<n; i++){
            data.push(data[data.length-1]+data[data.length-2])
        }
    }
    return data[n-1]    
}