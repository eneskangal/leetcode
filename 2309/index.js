let greatestLetter= function(s){
    let string= "";
    let hash= {};

    for(let i= 0; i<s.length; i++){
        if(hash[s.charCodeAt(i)]==undefined){
            if(s.charCodeAt(i)>96&&s.charCodeAt(i)<123){
                hash[s.charCodeAt(i)-32]= s.charCodeAt(i)-32;            
            }   
            else if(s.charCodeAt(i)>64&&s.charCodeAt(i)<91){
                hash[s.charCodeAt(i)+32]= s.charCodeAt(i)+32;                 
            } 
        }
        else{
            if(string<s[i].toUpperCase()){
                string= s[i].toUpperCase();
            }
        }           
    } 
    return string;
};