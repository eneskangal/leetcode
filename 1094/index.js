let carPooling= function(trips, capacity){
    const obj= {};
    for(let i=0; i<trips.length; i++){
        if(obj[trips[i][1]]){
            obj[trips[i][1]]-= trips[i][0];
            if(obj[trips[i][2]]){
                obj[trips[i][2]]+= trips[i][0] 
            }
            else{
                obj[trips[i][2]]= trips[i][0]                
            }            
        }        
        else{
            obj[trips[i][1]]= -1*trips[i][0];
            if(obj[trips[i][2]]){
                obj[trips[i][2]]+= trips[i][0] 
            }
            else{
                obj[trips[i][2]]= trips[i][0]                
            }
        }        
    }
    for(prop in obj){
        if(obj[prop]<0){
            if(capacity+(obj[prop])>=0){
                capacity= capacity+(obj[prop]);       
            }
            else{
                return false;
            }           
        }
        else{
            capacity= capacity+obj[prop];       
        }
    }
    return true;
};