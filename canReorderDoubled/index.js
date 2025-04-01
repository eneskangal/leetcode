let canReorderDoubled= function(arr){
    arr= arr.sort((a,b)=>{
        return a-b;
    });

    let obj= {};
    for(let i= 0; i<arr.length; i++){
        if(obj[arr[i]]==undefined){
            if(arr[i]<0){
                if(obj[arr[i]/2]==undefined){
                    obj[arr[i]/2]= 1;
                }
                else{
                    obj[arr[i]/2]+= 1;
                }                              
            }            
            else{
                if(obj[arr[i]*2]==undefined){
                    obj[arr[i]*2]= 1;
                }
                else{
                    obj[arr[i]*2]+= 1;
                } 
            }
        }
        else{
            if(obj[arr[i]]==1){
                delete obj[arr[i]];
            }
            else{
                obj[arr[i]]-= 1;                
            }
        }
    } 
    if(Object.values(obj).length>0){
        return false;
    }
    return !false;
};