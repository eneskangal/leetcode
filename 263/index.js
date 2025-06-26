let isUgly= function(n){    
    let data=[2,3,5]
    let i=2    
    let bolen=1     
    if(n<=0){              
        return false        
    }
    while(i<6){        
        if(n%i==0){
            if(data.includes(i)===false){                
                return false
            }
            else{                
                bolen=i
                n=n/bolen 
                i+=0 
            }                               
        }
        else{
            bolen=1            
            n=n/bolen
            i++                      
        }        
    }  
    return n==1 ? true : false 
}