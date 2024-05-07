let numberOfEmployeesWhoMetTarget= function(hours, target){
    let sumWorkers= 0;
    for(let i=0; i<hours.length; i++){
        if(hours[i]>=target){
            sumWorkers++;
        }
    }   
    return sumWorkers; 
};