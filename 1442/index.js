let countTriplets= function(arr){
    const n= arr.length;
    let prefixXOR= new Array(n + 1).fill(0);

    for (let i= 0; i<n; i++){
        prefixXOR[i + 1]= prefixXOR[i]^arr[i];
    }

    let count= 0;

    for(let i= 0; i<n; i++){
        for(let k= i; k<n; k++){
            if((prefixXOR[k + 1]^prefixXOR[i])===0){
                count+= (k-i);
            }
        }
    }
    return count;
};