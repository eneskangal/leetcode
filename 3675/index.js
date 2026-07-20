let minOperations= function(s){
    let array= new Array(26).fill(0);
    for(let i= 0; i<s.length; i++){
        if(s[i]=="a"){
            array[25]++;
        }
        else{
            array[s.charCodeAt(i)-98]++;
        }
    }    
    let count= 0;
    for(let i= 0; i<26; i++){
        if(array[i]>0){
            for(let k= i+1; k<26; k++){
                if(array[k]>0){
                    array[k]+= array[i];
                    array[i]= 0;
                    count+= k-i;
                    break;
                }
            }
        }            
    }    


    for(let i= 0; i<26; i++){
        if(array[i]>0){
            count+= 25-i;
        }
    }
    return count;      
};