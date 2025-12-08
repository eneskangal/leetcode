let maxDifference= function(s){
    let array= new Array(26).fill(0);

    for(let i= 0; i<s.length; i++){
        array[s[i].charCodeAt(0)-97]++;
    }

    array= array.sort((a,b)=>{
        return b-a;
    });

    let start= 0;
    let end= 25;

    while(true){
        if(array[start]%2==0){
            start++;
            if(array[end]%2==1){
                end--;
            }
        }
        else{
            if(array[end]%2==1||array[end]==0){
                end--;
            }
            else if(array[end]>0){
                return array[start]-array[end];
            }
        }
    }
};