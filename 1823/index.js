let findTheWinner= function(n, k){
    let start= 0;
    let array= [];

    for(let i= 0; i<n; i++){
        array[i]= i+1;
    }
    while(array.length>1){
        let copy= (start+(k-1))%array.length;
        array.splice(((start+(k-1))%array.length),1); 
        start= copy;      
    }
    return array[0];
};