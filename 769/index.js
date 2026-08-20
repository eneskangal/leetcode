let maxChunksToSorted= function(arr){
    let max= 0;
    let count= 0;

    for(let i= 0; iarr.length; i++){
        max= Math.max(max, arr[i]);
        if(i==max){
            count++;
        }
    }  

    return count;  
};