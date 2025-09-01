let sumZero= function(n){
    if(n%2==1){
        let array= [];
        for(let i= 1; i<=Math.trunc(n/2); i++){
            array.push(i);
            array.push(i*-1);
        }
        array.push(0);
        return array;
    }
    else{
        let array= [];
        for(let i= 1; i<=Math.trunc(n/2); i++){
            array.push(i);
            array.push(i*-1);
        }
        return array;        
    }    
};