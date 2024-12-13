let findingUsersActiveMinutes= function(logs, k){
    let obj= {};
    let array= new Array(k).fill(0);
    for(let i= 0; i<logs.length; i++){
        if(obj[logs[i][0]]==undefined){
            obj[logs[i][0]]= {};
            obj[logs[i][0]]["activites"]= {};
            obj[logs[i][0]]["activites"][logs[i][1]]= logs[i][1];    
            obj[logs[i][0]]["sum"]= 1;     
            if(array[0]>0){
                array[0]+= 1;
            }
            else{
                array[0]= 1;
            }        
        }
        else{            
            if(obj[logs[i][0]]["activites"][logs[i][1]]==undefined){
                obj[logs[i][0]]["activites"][logs[i][1]]= logs[i][1];
                array[obj[logs[i][0]]["sum"]-1]-= 1;  
                array[obj[logs[i][0]]["sum"]]+= 1; 
                obj[logs[i][0]]["sum"]+= 1;  
            }
        }        
    }
    return array;    
};