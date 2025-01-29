let minDistance= function(word1, word2){
    let dp= [];
    for(let i= 0; i<word2.length+1; i++){
        dp.push([]);
        for(let k= 0; k<word1.length+1; k++){
            dp[i].push(0);
        } 
    }

    let max= 0;
    for(let i= word2.length-1; i>-1; i--){
        for(let k= word1.length-1; k>-1; k--){
            if(word1[k]!=word2[i]){
                dp[i][k]= Math.max(dp[i+1][k], dp[i][k+1]);
            }
            else{
                dp[i][k]= dp[i+1][k+1]+1;          
                if(max<dp[i][k]){
                    max= dp[i][k]; 
                }     
            }
        } 
    }
    return (word1.length+word2.length)-(max*2);          
};