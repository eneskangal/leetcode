let kthDistinct= function(arr, k){
    let obj= {};
    let array= [];
    for(let i=0; i<arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]]= arr[i];
            array.push(arr[i]); 
        }
        else{
            while(array.indexOf(arr[i])>-1){
                array.splice(array.indexOf(arr[i]), 1); 
            }   
        }
    }
    return array[k-1] == undefined ? "" : array[k-1];    
};