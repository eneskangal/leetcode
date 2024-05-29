let makeSmallestPalindrome= function(s){
    s= s.split("");
    if(s.length%2==0){
        let index= s.length-1;
        for(let i=0; i<s.length/2; i++){
            if(s[i].charCodeAt(0)>=s[index].charCodeAt(0)){
                s[i]= s[index];
            }
            else{
               s[index]= s[i]; 
            }
            index--;
        }        
    }
    else{
        let index= s.length-1;
        let length= s.length/2;
        for(let i=0; i<length; i++){
            if(s[i].charCodeAt(0)>=s[index].charCodeAt(0)){
                s[i]= s[index];
            }
            else{
               s[index]= s[i]; 
            }
            index--;
        }                
    }
    return s.join("");   
};