let minimumSum= function(n, k){
    let index= 0;
    let hash= {};
    let number= 1;
    let sum= 0;
    while(index<n){
        if(number<k){
            if(hash[number]==undefined){
                hash[k-number]= 1;
                sum+= number; 
                number++;               
                index++;
            }
            else{
                number++;
            }
        }
        else{
            if(hash[number]==undefined){
                hash[number]= 1; 
                sum+= number; 
                number++;    
                index++;          
            }
        }        
        
    }  
    return sum;  
};