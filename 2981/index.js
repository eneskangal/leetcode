let maximumLength= function(s){
    let max= -1;
    
    function isUniq(string){
        let hash= {};
        for(let i= 0; i<string.length; i++){
            if(i==0){
                hash[string[i]]= 1;
            }
            else if(hash[string[i]]==undefined){
                return false;
            }
        }
        return true;
    }
    for(let i= 1; i<s.length; i++){
        let count= 0;
        let last= "";
        let hash= {};
        for(let k= 0; k<s.length-i+1; k++){
            let result= isUniq(s.slice(k, k+i));
            if(result){
                if(hash[s.slice(k, k+1)]==undefined){
                    hash[s.slice(k, k+1)]= 1;                    
                }
                else{
                    if(hash[s.slice(k, k+1)]==2){
                        if(max<i){
                            max= i;
                        }     
                        break;                   
                    }
                    else{
                        hash[s.slice(k, k+1)]++
                    }
                }
            }       
        }        
    }
    return max;    
};