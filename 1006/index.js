let clumsy= function(n){
    let subResult= n;
    let choices= ["*", "/", "+","-"];
    let index= 0;
    let result= 0;
    let anotherSum= 0;
    for(let i= n-1; i>0;){        
        if(index==0){
            subResult*= i;
            index++;
            i--;
        }
        else if(index==1){
            subResult= Math.floor(subResult/i);
            index++;
            i--;
        }
        else if(index==2){
            anotherSum+= i;
            if(result==0){
                result= subResult;
                subResult= i-1;
                index= 0;
                i= i-2;
            }
            else{
                result-= subResult;
                subResult= i-1;
                index= 0;
                i= i-2;                
            }
        }   
    }
    return Math.abs(result-subResult+anotherSum);  
};