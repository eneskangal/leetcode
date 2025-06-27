let distributeCandies= function(candyType){
    let max= candyType.length/2;
    let count= 0;
    const obj= {};
    for(let i= 0; i<candyType.length; i++){
        if(obj[candyType[i]]==undefined){
            if(count+1==max){
                return max;
            }
            else{
                count++;
                obj[candyType[i]]= candyType[i];
            }
        }
    }
    return count;   
};