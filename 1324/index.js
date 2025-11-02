let printVertically= function(s){
    s= s.split(" ");

    let max= 0;
    for(let i= 0; i<s.length; i++){
        if(max<s[i].length){
            max= s[i].length;
        }
    }   
    
    let array= new Array(max).fill("");
    for(let i= 0; i<max; i++){
        for(let k= 0; k<s.length; k++){
            if(s[k][i]==undefined){
                array[i]+= " ";
            }
            else{
                array[i]+= s[k][i];
            }
        }
        array[i]= array[i].trimEnd();
    }
    return array;
};