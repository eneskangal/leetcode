let strWithout3a3b= function(a, b){
    if(a<b){
        if(b%2==0){
            let border= Math.floor(b/2)-1;
            let limit= Math.abs((border*2)-a);
            let count= 0;
            let returnString= "";
            while(count<=border){
                if(count<limit){
                    returnString+= "bb"+"a";
                    a-= 1;
                    b-= 2;
                    count++;
                }
                else{
                    returnString+= "b".repeat(Math.min(b, 2))+"a".repeat(Math.min(a, 2));  
                    a-= Math.min(a, 2);
                    b-= Math.min(b, 2); 
                    count++;                 
                }                
            }
            return returnString;            
        }
        else{
            let border= Math.floor(b/2);
            let limit= Math.abs((border*2)-a);
            let count= 0;
            let returnString= "";
            while(count<=border){
                if(count<limit){
                    returnString+= "bb"+"a";
                    a-= 1;
                    b-= 2;
                    count++;
                }
                else{
                    returnString+= "b".repeat(Math.min(b, 2))+"a".repeat(Math.min(a,2));  
                    a-= Math.min(a, 2);
                    b-= Math.min(b, 2); 
                    count++;                 
                }                
            }
            return returnString;
        }        
    }
    else if(a==b){
        let returnString= "";
        while(a>0){
            returnString+= "a".repeat(Math.min(2, a))+"b".repeat(Math.min(2, b));
            a-= Math.min(2, a);
            b-= Math.min(2, b);
        }      
        return returnString;  
    }
    else{
        if(a%2==0){
            let border= a==2 ? 1  : Math.floor(a/2)-1;
            let limit= Math.abs((border*2)-b);
            let count= 0;
            let returnString= "";
            while(count<=border){
                if(count<limit){
                    returnString+= "aa"+"b";
                    a-= 2;
                    b-= 1;
                    count++;
                }
                else{
                    returnString+= "a".repeat(Math.min(a, 2))+"b".repeat(Math.min(b,2));  
                    a-= Math.min(a, 2);
                    b-= Math.min(b,2); 
                    count++;                 
                }                
            }
            return returnString;            
        }
        else{
            let border= Math.ceil(a/2)-1;
            let limit= Math.abs((border*2)-b);
            let count= 0;
            let returnString= "";
            while(count<=border){
                if(count<limit){
                    returnString+= "a".repeat(2)+"b";  
                    a-= 2;
                    b-= 1; 
                    count++;
                }
                else{
                    returnString+= "a".repeat(Math.min(a, 2))+"b".repeat(Math.min(b, 2));  
                    a-= Math.min(a, 2);
                    b-= Math.min(b, 2); 
                    count++;                 
                }                
            }
            return returnString;
        } 
    }   
};