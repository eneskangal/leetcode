let findLucky= function(arr){
    let obj= {};
    for(let i= 0; i<arr.length; i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]= 1;
        }
        else{
            obj[arr[i]]+= 1;
        }
    }

    let result= -1;
    for(let prop in obj){
        if(obj[prop]==prop){
            result= prop*1;
        }
    } 
    return result;   
};