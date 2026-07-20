let earliestTime= function(tasks){
    let max= 1000;
    for(let i= 0; i<tasks.length; i++){
        if(max>tasks[i][0]+tasks[i][1]){
            max= tasks[i][0]+tasks[i][1];
        }
    }    
    return max; 
}