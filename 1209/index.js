let removeDuplicates= function(s, k){
    let array= [];
    let chars= [];

    for(let i= 0; i<s.length; i++){
        if(array.length==0){
            array.push(1);
            chars.push(s[i]);
        }
        else{
            if(chars.at(-1)==s[i]){
                if(array.at(-1)==k-1){                    
                    array.pop();
                    chars.pop();                 
                }
                else{
                    array[array.length-1]++;
                }
            }
            else{
                array.push(1);
                chars.push(s[i]);
            }
        }        
    }    
    let string= "";
    for(let i= 0; i<array.length; i++){
        string+= chars[i].repeat(array[i]);
    }
    return string;    
};