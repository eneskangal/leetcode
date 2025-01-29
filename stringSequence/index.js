let stringSequence= function(target){
    let results= [];
    let alphabets= "abcdefghijklmnopqrstuvwxyz".split("");
    let startIndex= 0;
    let alphabetsIndex= 0;
    let current= "";
    let subCurrent= "";
    while(startIndex<target.length){
        if((alphabets[(alphabetsIndex%26)])==target[startIndex]){
            results.push(current+target[startIndex]);
            current= current+target[startIndex];
            alphabetsIndex= 0;
            startIndex++;
        }            
        else{            
            results.push(current+alphabets[(alphabetsIndex%26)]);
            alphabetsIndex++;
        }
    }
    return results;
};