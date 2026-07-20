let longestCommonPrefix= function(arr1, arr2){
    let trie= {};
    let hash= {};
    for(let i= 0; i<arr2.length; i++){
        let curr= trie;
        let word= "";
        let number= 1;
        for(let s of arr2[i]+""){
            if(curr[s]==undefined){
                curr[s]= {isLeaf: false};
            }
            hash[word+s]= number;
            curr= curr[s];
            word+= s;
            number++;
        }
        curr.isLeaf= true;
    }     

    let biggest= 0;
    for(let number of arr1){
        let word= "";
        for(let s of number+""){
            if(hash[word+s]!=undefined){
                if(biggest<hash[word+s]){
                    biggest= hash[word+s];
                }
            }
            word+= s;
        }
    }

    return biggest;
    
};