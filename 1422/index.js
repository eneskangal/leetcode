let maxScore= function(s){
    let left= 0;
    let right= 0;
    if(s[0]==0){
        left++;
    }

    let max= 0;
    for(let i= 1; i<s.length; i++){
        if(s[i]==1){
            right++;
        }
    }

    for(let i= 1; i<s.length; i++){
        if(i==1){
            let diff= left+right;
            if(max<diff){
                max= diff;
            }
        }
        else{
            if(s[i-1]==1){
                right--;
                let diff= left+right;
                if(max<diff){
                    max= diff;
                }                
            }
            else{
                left++;
                let diff= left+right;
                if(max<diff){
                    max= diff;
                }
            }
        }
    } 
    return max;   
};