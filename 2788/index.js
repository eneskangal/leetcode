let splitWordsBySeparator= function(words, separator){
    let data= [];

    for(let i= 0; i<words.length; i++){
        let separatorWord= "";
        for(let k= 0; k<words[i].length; k++){
            if(words[i][k]==separator){
                if(separatorWord!=''){
                    data.push(separatorWord);
                }
                separatorWord= "";
            }
            else{
                separatorWord+= words[i][k];
            }        
        }
        if(separatorWord!=''){
            data.push(separatorWord);
        }      
    }
    return data;
};