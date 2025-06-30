let maximumOddBinaryNumber= function(s){
    s= s.split("");
    let isFirst= true;
    let index= 0;
    for(let i=0; i<s.length-1; i++){
        if(s[i]=="1"){
            if(s[s.length-1]=="0"){
                s[s.length-1]= "1";
                s[i]= "0";                
                isFirst= false;
            }
            else{
                isFirst= false;
                if(s[index]=="0"&&isFirst==false){
                    s[index]= "1";
                    s[i]= "0";                                   
                } 
                index++;            
            }            
        }        
    }
    return s.join("");    
};