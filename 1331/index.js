let arrayRankTransform= function(arr){
    let copy= [...arr];
    arr= arr.sort((a,b)=>{
        return a-b;
    });
    let hash= {};
    let index= 1;
    for(let i= 0; i<arr.length; i++){
        if(hash[arr[i]]==undefined){
            hash[arr[i]]= index;
            index++;
        }
    }

    let ranks= [];
    for(let i= 0; i<copy.length; i++){
        ranks.push(hash[copy[i]]);
    }    

    return ranks;
};