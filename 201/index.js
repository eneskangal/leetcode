let rangeBitwiseAnd= function(left, right){
    if(left==right){
        return left;
    }
    leftToString= left.toString(2);   
    rightToString= right.toString(2);  
    if(leftToString.length!=rightToString.length){
        return 0;
    }
    else{
        let value= "";
        let isFalse= false;
        for(let i= 0; i<rightToString.length; i++){
            if(leftToString[i]==0){
                if(rightToString[i]==1){
                    isFalse= true;  
                    value+= 0;           
                }
                else{
                    value+= 0;
                }                
            }
            else{
                if(rightToString[i]==1&&!isFalse){
                    value+= 1;           
                }
                else{
                    value+= 0;
                }
            }                        
        }
        return parseInt(value, 2);
    }  
};