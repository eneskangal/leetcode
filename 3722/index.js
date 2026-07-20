let lexSmallest= function(s){
    let last= s;
    let copy= [...s];
    s= s.split("");    
    for(let i= 2; i<=s.length; i++){
        let word= s.slice(0, i).reverse().concat(s.slice(i)).join("");        
        if(last>word){
            last= word;
        }
        s= [...copy];
    }

    for(let i= 2; i<=s.length; i++){
        let word= s.slice(0, s.length-i).concat(s.reverse().slice(0, i)).join("");
        if(last>word){
            last= word;
        }
        s= [...copy];
    } 
    return last;   
};