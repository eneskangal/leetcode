let topKFrequent= function(words, k){
    let hash= {};
    let max;
    for(let i= 0; i<words.length; i++){        
        if(hash[words[i]]==undefined){
            if(max==undefined){
                hash[words[i]]= {max: 1};
                hash[1]= {[words[i]]:{max:1}};    
                max= 1;            
            }
            else{
                hash[words[i]]= {max: 1};
                hash[1][words[i]]= {max:1};   
            }
        }
        else{
            if(hash[words[i]]["max"]+1>max){
                let currentMax= hash[words[i]]["max"];
                hash[words[i]]["max"]+= 1;  
                hash[max+1]= {[words[i]]:{max:max+1}};   
                delete hash[currentMax][words[i]]  
                max+= 1;            
            }
            else{
                let currentMax= hash[words[i]]["max"];
                hash[currentMax+1][words[i]]= {max: currentMax+1};
                hash[words[i]]["max"]+= 1;
                delete hash[currentMax][words[i]];                    
            }
        }
    }
    let array= [];
    for(let  i= k; i>0;){
        let maxes= Object.keys(hash[max]);
        if(k<=maxes.length){
            if(array.length==0){
                return maxes.sort().slice(0,k);
            }
            else{
                return [...array, ...maxes.sort().slice(0, k)];
            }
        }
        else if(k>maxes.length){            
            array= [...array, ...maxes.sort()];
            max--;
            k-= maxes.length;                        
        }        
    }                  
};