let divideArray= function(nums, k){
    let sort= nums.sort((a,b)=>{
        return a-b;
    });
    let data= [];
    for(let i= 0; i<sort.length; i+=3){
        if(sort[i+2]-sort[i]<=k&&sort[i+1]-sort[i]<=k&&sort[i+2]-sort[i+1]<=k){
            data.push(sort.slice(i, i+3));            
        }
        else{
            return [];
        }
    }
    return data;    
};