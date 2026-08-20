let numsSameConsecDiff= function(n, k){
    let numbers= "0123456789";
    let set= new Set();

    function plusBacktracking(stringNumber, i){
        if(stringNumber.length==n){
            set.add(parseInt(stringNumber*1));
        }
        else{
            if(numbers[i+k]!=undefined){
                plusBacktracking(stringNumber+numbers[i+k], i+k);           
            }
            if(numbers[i-k]!=undefined){
                subtractBacktracking(stringNumber+numbers[i-k], i-k);           
            }
        }        
    }

    function subtractBacktracking(stringNumber, i){
        if(stringNumber.length==n){
            set.add(stringNumber*1);
        }
        else{
            if(numbers[i-k]!=undefined){
                subtractBacktracking(stringNumber+numbers[i-k], i-k);                
            }
            if(numbers[i+k]!=undefined){
                plusBacktracking(stringNumber+numbers[i+k], i+k);           
            }
        }        
    }

    for(let i= 1; i<numbers.length; i++){
        plusBacktracking(numbers[i].toString(), i);
        subtractBacktracking(numbers[i].toString(), i);
    }    

    let array= [];
    for(const value of set.entries()){
        array.push(value[0]);
    }
    return array;
};