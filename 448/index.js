let findDisappearedNumbers= function(nums){
    const data= [];
    const object= {};
    const sortArray= nums.sort((a,b)=>{
        return a-b;
    });  
    for(let i=0; i<sortArray.length; i++){
        object[sortArray[i]]= sortArray[i];
    }
    for(let i=0; i<sortArray.length; i++){
        if(object[i+1]==undefined){
            data.push(i+1);
        }
    }
    return data;
};