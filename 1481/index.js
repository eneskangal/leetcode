let findLeastNumOfUniqueInts= function(arr, k){
    let hash= {};
    let array= [];

    for(let i= 0; i<arr.length; i++){
        if(hash[arr[i]]==undefined){
            hash[arr[i]]=  {count: 1};
        }
        else{
            hash[arr[i]]["count"]+= 1;
        }
    }    
    
    for(let prop in hash){
        array.push(hash[prop]);        
    }

    array= array.sort((a,b)=>{
        return a["count"]-b["count"];
    });
    
    let count= 0;
    let arrayLength= array.length;
    for(let i= 0; i<array.length; i++){
        if(k<array[i]["count"]){
            k= 0;
            break;
        }
        else{
            k-= array[i]["count"]; 
            arrayLength--;
        }   
    } 

    return arrayLength;
};