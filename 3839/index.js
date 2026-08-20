let prefixConnected= function(words, k){
    let groupLength= 0;
    let hash= {};
    let hash2= {};

    for(let i= 0; i<words.length; i++){
        let count= 0;
        let copy= words[i].slice(0, k);
        if(hash2[copy]==undefined){
            hash2[copy]= 1;
        }
        else{
            if(words[i][k-1]!=undefined){
                count++;
            }            
        }
        if(count>0&&hash[copy]==undefined){
            hash[copy]= 1;
            groupLength++;
        }        
    }    

    return groupLength;
};