let minimumChairs= function(s){
    let max= 0;
    let current= 0;
    for(let i=0; i<s.length; i++){
        if(s[i]=="E"){
            if(current<max+1){
                current= max+1;                
            }
            max++;
        }
        else{
            if(current<max){
                current= max;
            }  
            max--;                     
        }
    }   
    return current;
};