let evaluate= function(s, knowledge){
    let hash= {};

    for(let i= 0; i<knowledge.length; i++){
        hash[knowledge[i][0]]= knowledge[i][1];
    }  

    let word= "";
    let subWord= "";
    let isIn= false;

    for(let i= 0; i<s.length; i++){
        if(isIn==false){
            if(s[i]=="("){
                isIn= true;
            }
            else{
                word+= s[i];
            }
        }
        else{
            if(s[i]==")"){
                if(hash[subWord]==undefined){
                    word+= "?";
                    isIn= false;
                    subWord= "";
                }
                else{
                    word+= hash[subWord];
                    isIn= false;
                    subWord= "";
                }
            }
            else{
                subWord+= s[i];
            }
               
        }
    }  
    return word;
};