let buildArray= function(target, n){
    let current= 1;
    let i= 0;
    let array= [];
    while(target.length>i){
        if(target[i]==current){            
            array.push("Push");  
            i++;
            current++;          
        }
        else{
            current++; 
            array.push("Push"); 
            array.push("Pop");            
        }
    } 
    return array;      
};