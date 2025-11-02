let maxValue= function(n, x){
    if(n[0]!="-"){
        for(let i= 0; i<n.length; i++){
            if(n[i]<x){
                return n.slice(0, i)+x+n.slice(i);
            }
        }
        return n+x;
    }
    else{
        for(let i= 1; i<n.length; i++){
            if(n[i]>x){
                return n.slice(0, i)+x+n.slice(i);
            }
        }
        return n+x;
    }    
};