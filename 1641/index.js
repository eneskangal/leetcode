let countVowelStrings= function(n){
    let array= [1, 1, 1, 1, 1];
    if(n==1){
        return 5;
    }
    for(let i= 1; i<=n; i++){     
        for(let j= 0; j<5;  j++){
            let sum= 0;
            for(let k= j; k<5; k++){
                sum+= array[k]
            }
            array[j]= sum;
        }    
    }
    return array[0];      
};