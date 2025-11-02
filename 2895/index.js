let minProcessingTime= function(processorTime, tasks){
    tasks= tasks.sort((a,b)=>{
        return b-a;
    });

    processorTime= processorTime.sort((a,b)=>{
        return a-b;
    });


    let max= 0;
    for(let i= 0; i<processorTime.length; i++){
        for(let k= (i*4); k<(i*4)+(4); k++){
            if(max<processorTime[i]+tasks[k]){
                max=  processorTime[i]+tasks[k];
            }
        }
    } 

    return max;   
};