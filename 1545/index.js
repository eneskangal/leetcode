let findKthBit= function(n, k){
    let previous= [""];    
    function reverse(word){
        let string= "";
        for(let i= 0; i<word.length; i++){
            if(word[i]=="0"){
                string= "1"+string;
            }
            else{
                string= "0"+string;
            }
        }
        return string;
    }

    for(let i= 1; i<=n; i++){
        if(i==1){
            previous[0]= "0";
        }
        else{
            previous[0]=  previous[0]+1+(reverse(previous[0]));           
        }
    }    
    
    return previous[0][k-1];
};