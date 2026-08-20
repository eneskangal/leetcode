let findAnagrams= function(s, p){
    let array= new Array(26).fill(0);  
    let controlArray= new Array(26).fill(0);  
    let results= [];
    let pLength= p.length;

    for(let i= 0; i<pLength; i++){
        array[p.charCodeAt(i)-97]++;
    } 

    for(let i= 0; i<s.length; i++){
        if(i>=pLength){
            controlArray[s.charCodeAt(i-pLength)-97]--;  
            controlArray[s.charCodeAt(i)-97]++;  
            if(controlArray.toString()==array.toString()){
                results.push(i+1-pLength);                
            }
        }
        else{
            controlArray[s.charCodeAt(i)-97]++; 
            if(i+1==pLength&&controlArray.toString()==array.toString()){
                results.push(i+1-pLength);                
            } 
        }             
    }
    return results;   
};