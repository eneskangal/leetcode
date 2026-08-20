let beautySum= function(s){
    let count= 0;

    for(let i= 0; i<s.length; i++){
        let array= new Array(26).fill(0);
        for(let k= i; k<s.length; k++){
            array[s.charCodeAt(k)-97]++;
            let max= 0;
            let min= 1000;
            for(let j= 0; j<array.length; j++){
                if(array[j]>max){
                    max= array[j];
                }
                if(array[j]>0){
                    if(min>array[j]){
                        min= array[j];
                    }
                }                                
            }
            count+= max-min;
        }        
    } 
    return count;   
};