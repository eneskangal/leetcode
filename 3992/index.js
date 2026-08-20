let rearrangeString= function(s, x, y){
    let yWord= "";
    let xWord= "";
    let normalWord= "";
    for(let i= 0; i<s.length; i++){
        if(s[i]==y){
            yWord+= y;
        }
        else if(s[i]==x){
            xWord+= x;            
        }  
        else{
            normalWord+= s[i];
        }      
    } 

    return yWord+xWord+normalWord;   
};