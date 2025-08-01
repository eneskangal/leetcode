let minimumRounds= function(tasks){
    tasks= tasks.sort((a,b)=>{
        return a-b;
    });

    let count= 0;    
    for(let i= 0; i<tasks.length;){
        if(tasks[i]==tasks[i+1]&&tasks[i]==tasks[i+2]){            
            if(tasks[i+3]!=tasks[i]){
                i+=3;
                count++;
            }
            else if(tasks[i+4]!=tasks[i]){
                i+= 2;
                count++;                
            }
            else if(tasks[i+3]==tasks[i]&&tasks[i+1]==tasks[i]&&tasks[i+2]==tasks[i]){
                i+=3;
                count++;                
            }
        }
        else if(tasks[i]==tasks[i+1]&&tasks[i]!=tasks[i+2]){
            i+= 2;
            count++;
        }
        else if(tasks[i]!=tasks[i+1]){
            return -1;
        }
    }
    return count;  
};