let longestWord= function(words){
    let obj= {};
    words= words.sort();
    for(let i= 0; i<words.length; i++){
        if(words[i].length==1){
            obj[words[i]]= {count: 1};
        }
        else{
            let wordLength= words[i].length;
            let hash= obj[words[i].slice(0, wordLength-1)];
            if(hash!=undefined){
                hash[words[i]]= {count: hash["count"]+1}
                obj[words[i]]= {count: hash["count"]+1};
            }            
        }
    }

    let max= 0;
    let current= "";
    for(let prop in obj){
        if(obj[prop]["count"]>max){
            max= obj[prop]["count"];
            current= prop;            
        }
    }    
    return current;
};