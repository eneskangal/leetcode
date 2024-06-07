let maximumSwap= function(num){
    let numString= num.toString();
    let splitNum= numString.split("");
    let last;
    let index;
    for(let i=0; i<splitNum.length; i++){
        for(let k=i+1; k<splitNum.length; k++){            
            if(last==undefined){
                if(splitNum[k]>splitNum[i]){
                    last= splitNum[k];
                    index= k;
                }               
            }
            else if(splitNum[k]>=last||index>k){
                last= splitNum[k];
                index= k;
            }                  
        } 
        if(last!=undefined){
            let copy= splitNum[i];
            splitNum[index]= copy;
            splitNum[i]= last;           
            return  splitNum.join("")*1;       
        }           
    }
    return splitNum.join("")*1;     
}