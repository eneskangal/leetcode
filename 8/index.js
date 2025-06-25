let myAtoi= function(s){
    let firstNumber= false;
    let stringNumber= "";
    let firstSign= false;
    const numbers= {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true
    }
    for(let i=0; i<s.length; i++){     
        if(s[i]!=" "){      
            if((s[i]=="-"||s[i]=="+")&&!firstSign&&!firstNumber){
                if(s[i]=="-"){
                    stringNumber+= s[i];
                }
                firstSign= true;
            }
            else{          
                if((firstSign==true&&s[i]=="-"||s[i]=="+")&&firstNumber){
                    if(firstNumber){
                        if(-(2**31)>stringNumber*1){
                            return -(2**31);
                        }
                        else if((2**31)-1<stringNumber*1){
                            return (2**31)-1;
                        }
                        else{
                            return stringNumber*1;
                        }
                    }
                    else{
                        return 0;
                    }
                }                
                if(numbers[s[i]]){
                    if(s[i]=="0"&&!firstNumber){
                        firstZero= false;
                        firstNumber= true;
                    }
                    else{
                        stringNumber+= s[i];
                        firstNumber= true;
                    }
                }
                else{
                    if(firstNumber&&stringNumber!="-"){
                        if(-(2**31)>stringNumber*1){
                            return -(2**31);
                        }
                        else if((2**31)-1<stringNumber*1){
                            return (2**31)-1;
                        }
                        else{
                            return stringNumber*1;
                        }
                    }
                    else{
                        return 0;
                    }
                }                
            }
        }
        else{                
            if(firstSign&&stringNumber==""||stringNumber=="-"){            
                return 0;              
            }
            else if(firstNumber&&stringNumber==""||stringNumber=="-"){             
                return 0;              
            }
            else if(firstNumber||firstSign&&stringNumber!=""&&stringNumber!="-"){             
                return stringNumber*1;              
            }                        
        }            
    }
    if(firstNumber){
        if(-(2**31)>stringNumber*1){
            return -(2**31);
        }
        else if((2**31)-1<stringNumber*1){
            return (2**31)-1;
        }
        else{
            return stringNumber*1;
        }
    }
    else{
        return 0;
    }              
};