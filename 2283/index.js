let digitCount= function(num){
    let n= num.length;
    let count= new Array(10).fill(0);

    for(let i= 0; i<n; i++){
        count[parseInt(num[i])]++;  
    }

    for(let i= 0; i<n; i++){
        if (count[i]!== parseInt(num[i])){
            return false;
        }
    }
    return true; 
}