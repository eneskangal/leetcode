let maximumElementAfterDecrementingAndRearranging= function(arr){
    if(arr[1]==undefined){
        return 1;
    }
    arr= arr.sort((a,b)=>{
        return a-b;
    });
    for(let i= 0; i<arr.length; i++){
        if(i==0){
            if(Math.abs(arr[i+1]-arr[i])>1){
                arr[i+1]= 2;                
            }
            arr[i]= 1;
        }
        else{
            if(Math.abs(arr[i]-arr[i-1])>1){
                arr[i]= arr[i-1]+1;
            }
        }
    }

    return arr.at(-1);    
};