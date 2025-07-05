let duplicateZeros= function(arr){
    for(let i= 0; i<arr.length;){
        if(arr[i]==0){
            arr.splice(i, 0, 0);
            arr.pop();     
            i+= 2;       
        }
        else{
            i++;
        }
    }
};