let reportSpam= function(message, bannedWords){    
    let hash= {};
    for(let i= 0; i<bannedWords.length; i++){
        hash[bannedWords[i]]= bannedWords[i];
    }
    let count= 0;
    for(let i= 0; i<message.length; i++){
        if(hash[message[i]]!=undefined){
            if(count==1){
                return true;
            }
            else{
                count++;
            }
        }
    }
    return false;
};