let maximumProduct= function(array, k){
    array= array.sort((a,b)=>{
        return a-b;
    });

    array.unshift(undefined);

    for(let i= 0; i<k; i++){
        array[1]++;
        let index= 1;
        while(true){            
            if(array[index]>array[(index*2)]){
                let swap= array[index];
                array[index]= array[index*2];
                array[index*2]= swap;
                index*= 2;                
            }
            else if(array[index]>array[(index*2)+1]){
                let swap= array[index];
                array[index]= array[[(index*2)+1]];
                array[(index*2)+1]= swap;
                index= (index*2)+1;                
            }
            else{
                break;
            }
        }
    }   

    let sum= 1;
    for(let i= 1; i<array.length; i++){
        sum= ((sum*array[i])%((10**9)+7));
    }     

    return sum;
};