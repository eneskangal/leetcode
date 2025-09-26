let validStrings= function(n){
    let data= [];
    function backtracking(string, index, end){
        if(index>0){
            for(let i= 0; i<2; i++){
                if(i==0){
                    if(string[end]!=0){
                        backtracking(string+"0", index-1, end+1); 
                    }                                           
                }
                if(i==1){
                    backtracking(string+"1", index-1, end+1);                        
                }
            }              
        }
        else{
            data.push(string);
        }
    }
    
    for(let i= 0; i<2; i++){
        if(i==0){
            backtracking("0", n-1, 0);                        
        }
        if(i==1){
            backtracking("1", n-1, 0);                        
        }
    } 
    return data;   
};