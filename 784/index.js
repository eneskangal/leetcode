let letterCasePermutation= function(s){
    let obj= {};
    let results= [];
    s= s.split("");
    function backtrack(wholeArray, index){
        for(let i= index; i<wholeArray.length; i++){      
            if("0123456789".includes(wholeArray[i])==false){ 
                wholeArray[i]= wholeArray[i].toLowerCase(); 
                if(obj[wholeArray.join("")]==undefined){    
                    obj[wholeArray.join("")]= wholeArray.join("");                  
                    results.push(wholeArray.join(""));   
                    backtrack([...wholeArray], i+1); 
                }
                else{
                    backtrack([...wholeArray], i+1);                     
                }
                wholeArray[i]= wholeArray[i].toUpperCase();  
                if(obj[wholeArray.join("")]==undefined){                    
                    obj[wholeArray.join("")]= wholeArray.join("");
                    results.push(wholeArray.join("")); 
                    backtrack([...wholeArray], i+1);    
                }                                      
            }                                    
        }        
    }
    for(let i= 0; i<s.length; i++){      
        if("0123456789".includes(s[i])==false){      
            backtrack([...s], i);                                   
        }                                    
    }
    if(results.length==0){
        return [s.join("")];
    }
    return results;
}