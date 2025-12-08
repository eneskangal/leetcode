let valueAfterKSeconds= function(n, k){
    let mod= (10**9)+7;

    if(k==1){
        return n%mod;
    }

    let array= [];
    for(let i= 0; i<=k; i++){
        if(i==0){
            array[i]= new Array(n);
            array[i].fill(1);
        }
        else{
            array[i]= [1];
        }
    }
    for(let i= 1; i<=k; i++){
        for(let j= 1; j<n; j++){
            array[i][j]= (array[i-1][j]+array[i][j-1])%mod;
        }
    }   
    return array[k][n-1];
};