let minDeletions= function(s){
    let array= new Array(26).fill(0);

    for(let i= 0; i<s.length; i++){
        array[s.charCodeAt(i)-97]++;
    }  

    array= array.sort((a,b)=>{
        return b-a;
    });

    let count= 0;
    for(let i= 0; i<26; i++){
        if(array[i]==0){
            break;
        }
        else{
            for(let k= i+1; k<26; k++){
                if(array[k]>0&&array[i]==array[k]){
                    count++;
                    array[k]--;
                }
            }
        }
    }
    return count;
};