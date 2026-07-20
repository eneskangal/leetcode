let partitionLabels= function(s){
    let array= [];
    let hash= {};
    let count= 0;
    let lastIndex;
    for(let i= 0; i<s.length; i++){
        if(hash[s[i]]==undefined){
            hash[s[i]]= 1;
            let result= s.lastIndexOf(s[i]);
            if(lastIndex==undefined){
                lastIndex= result;
            }
            else if(lastIndex<result&&lastIndex<i){
                hash= {};                
                lastIndex= result;
                array.push(count);
                count= 0;
            }
            else if(lastIndex<result&&lastIndex>i){            
                lastIndex= result;
            }
        }
        count++;
    }
    array.push(count);
    return array;     
};