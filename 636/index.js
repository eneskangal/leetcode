let exclusiveTime= function(n, logs){
    let array= new Array(n).fill(0);
    let prevTime= 0;
    let stack= [];

    for(let i= 0; i<logs.length; i++){
        let [id, state, timeStamp]= logs[i].split(":");
        timeStamp= Number(timeStamp);
        if(state=="start"){
            if(stack.length>0){
                array[stack[stack.length-1]]+= timeStamp-prevTime;
            }
            stack.push(id);
            prevTime= timeStamp;                                   
        }
        else{
            array[stack[stack.length-1]]+= timeStamp-prevTime+1;      
            stack.pop();
            prevTime= timeStamp+1;                    
        }
    } 
    return array; 
};