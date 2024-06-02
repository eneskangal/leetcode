let findContentChildren= function(g, s){
    let gIndex;
    let count= 0;    
    for(let i= 0; i<s.length; i++){
        let fark= 999999999;
        for(let k= 0; k<g.length; k++){
            if(s[i]>=g[k]){
                if(fark>s[i]-g[k]&&s[i]-g[k]>-1){
                    if(s[i]-g[k]==0){
                        fark= s[i]-g[k];  
                        gIndex= k;   
                        break;
                    }
                    else{
                        fark= s[i]-g[k];  
                        gIndex= k;  
                    }               
                }                
            }               
        }
        if(fark!=999999999){
            g.splice(gIndex, 1); 
            count++;  
        }       
    }
    return count;
};