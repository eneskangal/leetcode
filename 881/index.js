let numRescueBoats= function(people, limit){
    let count= 0;
    people= people.sort((a,b)=>{
        return b-a;
    });
    let lastIndex= people.length-1;
    for(let i= 0; i<=lastIndex; i++){           
        if(people[i]==limit){
            count++;
        }
        else{            
            let sum= people[i];
            if(people[i]+people[lastIndex]<limit){
                count++;
                lastIndex--;
            }
            else if(people[i]+people[lastIndex]>limit){
                count++;
            }
            else{
                count++;
                lastIndex--;
            }
        }
    }
    return count;    
};