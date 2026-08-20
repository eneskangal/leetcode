let subdomainVisits= function(cpdomains){
    let array= [];
    let hash= {};

    for(let i= 0; i<cpdomains.length; i++){
        cpdomains[i]= cpdomains[i].split(" ");
        let pairs= cpdomains[i][1].split(".");
        let number= cpdomains[i][0];

        for(let k= 0; k<pairs.length; k++){
            let hashName= pairs.slice(k).join(".");
            if(hash[hashName]==undefined){
                hash[hashName]= {
                    val: parseInt(number),
                    content: number+" "+hashName
                };
            }
            else{                
                hash[hashName]= {
                    val: hash[hashName].val+parseInt(number), 
                    content: hash[hashName].val+parseInt(number)+" "+hashName
                };
            }            
        }
    }
    for(let obj in hash){
        array.push(hash[obj]["content"]);
    }  

    return array;
};