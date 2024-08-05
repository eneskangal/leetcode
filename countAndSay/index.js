let countAndSay= function(n){  
    let memo= {1:"1"};  
    if(memo[n]){
        return memo[n];
    }
    else{
        for(let i= 2; i<= n; i++){
            let count= 1;
            for(let k= 0; k<memo[i-1].length; k++){
                if(memo[i-1][k]==memo[i-1][k+1]){
                    count++;
                }
                else{
                    if(memo[i]==undefined){
                        memo[i]= count+memo[i-1][k];
                    }
                    else{
                        memo[i]+= count+memo[i-1][k];
                    }
                    count= 1;
                }
            }            
        }
        return memo[n];
    }
};