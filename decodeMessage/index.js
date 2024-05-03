let decodeMessage= function(key, message){
    let returnString= "";
    const map= new Map();    
    const characters= 'abcdefghijklmnopqrstuvwxyz';
    let i= 0;
    let charIndex= 0;
    
    while(map.size<26){
        if(key[charIndex]!=' '&& map.get(key[charIndex])==undefined){
            map.set(key[charIndex], characters[i]);
            i++;
        }
        charIndex++;   
    }
    for(let j=0; j<message.length; j++){
        if(message[j]==' '){
            returnString+= ' ';
        }
        else{
            returnString+= map.get(message[j]);
        }
    }
    
    return returnString;
};