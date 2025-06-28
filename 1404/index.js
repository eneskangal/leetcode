let numSteps= function(s){
    let count= 0n;
    function binaryToDecimal(binary){
        let base= 0n;
        let sum= 0n;
        for(let i= binary.length-1; i>-1; i--){
            if(binary[i]=="1"){
                sum+= 2n**BigInt(base);
            }            
            base++;
        }
        return sum;
    }
    if(typeof s=="string"){
        count+= numSteps(binaryToDecimal(s));
    }
    else{
        if(s==1n){
            return count;
        }
        if(s%2n==0n){
            count++;
            count+= numSteps(s/2n);               
        } 
        else{
            count++;
            count+= numSteps(s+1n);              
        }       
    }
    return count;    
};