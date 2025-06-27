let longestCommonSubsequence= function(text1, text2){
    let array= [];
    for(let i= 0; i<text2.length+1; i++){
        array.push([]);
        for(let k= 0; k<text1.length+1; k++){
            if(i==0){
                array[0].push(0);                
            }
            if(k==0){
                array[i].push(0);                
            }
        }
    } 

    let max= 0;
    for(let i= 1; i<text2.length+1; i++){
        for(let k= 1; k<text1.length+1; k++){
            if(text2[i-1]==text1[k-1]){
                if(max==array[i-1][k-1]){
                    max= array[i-1][k-1]+1;  
                }
                array[i][k]= array[i-1][k-1]+1;                            
            }
            else{
                array[i][k]= Math.max(array[i-1][k], array[i][k-1]);                               
            }
        }
    }
    return max;   
};