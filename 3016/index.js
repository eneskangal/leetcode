let minimumPushes= function(word){ 
    let hash= {};
    let chars= {};
    let row= 1;
    let col= 1;
    for(let i= 0; i<word.length; i++){
        if(hash[word[i]]==undefined){
            hash[word[i]]= 1;
        }
        else{
            hash[word[i]]+= 1;            
        }
    }

    hashSort= Object.keys(hash).sort((a,b)=>{
        return hash[b]-hash[a];
    });
    
    for(let i= 0; i<hashSort.length; i++){
        if(chars[hashSort[i]]==undefined){
            if(col==8){
                chars[hashSort[i]]= row;
                row++;
                col= 1;
            }
            else{
                chars[hashSort[i]]= row;
                col++;
            }
        }
    }

    let count= 0;
    for(let i= 0; i<word.length; i++){
        count+= chars[word[i]];
    }

    return count;
};