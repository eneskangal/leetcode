let canMakeArithmeticProgression= function(arr){
    arr= arr.sort((a,b)=>{
        return a-b;
    });
    
    let diff;    
    for(let i= 1; i<arr.length; i++){
        if(diff==undefined){
            diff= arr[i]-arr[i-1];
        }
        else if(diff!=arr[i]-arr[i-1]){
            return false;
        }
    }    
    return true;    
};