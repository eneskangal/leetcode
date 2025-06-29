let targetIndices= function(nums, target){
    let data=[]
    let sortlanmısHali=nums.sort((a,b)=>{
        return a-b
    }) 
    for(let i=0; i<sortlanmısHali.length; i++){
        if(sortlanmısHali[i]==target){
            data.push(i)
        }
    }
    return data    
}