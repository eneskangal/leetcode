let kidsWithCandies= function(candies, extraCandies){
    let data=[]
    let max=Math.max(...candies) 
    for(let i=0; i<candies.length; i++){
        if(max<=candies[i]+extraCandies){
            data.push(true)
        }
        else{
            data.push(false)
        }        
    }
    return data   
}
console.log(kidsWithCandies([2,3,5,1,3],3))