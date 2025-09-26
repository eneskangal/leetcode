let numberOfBeams= function(bank){
    let previous;
    let sum= 0;
    for(let i= 0; i<bank.length; i++){
        let count= 0;
        for(let k= 0; k<bank[i].length; k++){
            if(bank[i][k]=="1"){
                count++;
            }
        } 
        if(previous==undefined){
            previous= count;
        }    
        else if(count>0){
            sum+= previous*count; 
            previous= count;                       
        }  
    }  
    return sum;  
};