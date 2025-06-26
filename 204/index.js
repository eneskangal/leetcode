let countPrimes= function(n){
    if(n<2){
        return 0;
    }
    else{
        let primes= [false];
        let count= 0;
        for(let i= 2; i<n;){
            if(primes[i-1]==undefined){
                primes[i-1]= true;
                count++;
                for(let k= i; k<n; k+= i){
                    if(primes[k-1]==undefined){
                        primes[k-1]= true;
                    }
                }
                if(i==2){
                    i++;
                } 
                else{
                    i+= 2;
                }  
            }
            else{                
                i+= 2;
            }                            
        }
        return count;                
    }    
};