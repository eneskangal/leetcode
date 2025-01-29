let findThePrefixCommonArray= function(A, B){
    let a= {};
    let b= {};
    let result= [];
    let prefix= 0;
    for(let i= 0; i<A.length; i++){
        if(A[i]==B[i]){
            if(i==0){                 
                prefix++;
                result[i]= prefix; 
            }
            else{
                prefix++;
                result[i]= prefix;
            }
        }
        else{
            if(b[A[i]]==A[i]){
                prefix++;
                result[i]= prefix;
                b[B[i]]= B[i]; 
            }
            if(a[B[i]]==B[i]){
                prefix++;
                result[i]= prefix;  
                a[A[i]]= A[i];              
            }
            else{ 
                result[i]= prefix;               
                a[A[i]]= A[i]; 
                b[B[i]]= B[i];  
            }           
        }
    }
    return result;    
};