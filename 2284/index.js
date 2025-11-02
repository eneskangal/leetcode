let largestWordCount= function(messages, senders){
    let hash= {};
    let users= {};


    for(let i= 0; i<messages.length; i++){
        if(users[senders[i]]==undefined){
            let howMuchSpaces= messages[i].split(" ").length;
            users[senders[i]]= howMuchSpaces; 
            if(hash[howMuchSpaces]==undefined){
                hash[howMuchSpaces]= {};
                hash[howMuchSpaces][senders[i]]= true;                                
            } 
            else{
                hash[howMuchSpaces][senders[i]]= true;                    
            }         
        }
        else{
            let old= users[senders[i]];    
            let howMuchSpaces= messages[i].split(" ").length+old;
            delete hash[old][senders[i]];    
            users[senders[i]]= howMuchSpaces; 
            if(hash[howMuchSpaces]==undefined){
                hash[howMuchSpaces]= {};
                hash[howMuchSpaces][senders[i]]= true;                                
            } 
            else{
                hash[howMuchSpaces][senders[i]]= true;                    
            } 
        }       
    }   

    let max= 0;
    for(let props in users){
        if(max<users[props]){
            max= users[props];
        }
    }

    let biggestWord= "";
    for(let prop in hash[max]){
        if(biggestWord<prop){
            biggestWord= prop;
        }
    }

    return biggestWord;
};