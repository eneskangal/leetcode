let monotoneIncreasingDigits= function(n){
    let splitN= n+"";
    splitN= splitN.split(""); 
    for(let i= splitN.length-1; i>0; i--){
        if(splitN[i]<splitN[i-1]){
            if(i-1==0&&splitN[i-1]==1){
                return "9".repeat(splitN.length-1)*1;
            }
            else{
                if(i-1==0&&splitN[i-1]>1){
                    return ((splitN[i-1]-1)+("9".repeat(splitN.length-i)))*1;
                }
                else{
                    splitN[i-1]= splitN[i-1]-1+"";
                    for(let k= i; k<splitN.length; k++){
                        splitN[k]= "9";
                    }
                }
            }
        }
    } 
    return splitN.join("")*1;       
};