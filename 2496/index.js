let maximumValue= function(strs){
    let max= 0;
    for(let i=0; i<strs.length; i++){
        if(isNaN(strs[i])){
            let wordLength= strs[i].length;
            if(max<wordLength){
                max= wordLength;
            }
        }
        else if(max<strs[i]*1){
            max= strs[i]*1;
        }
    } 
    return max;   
};