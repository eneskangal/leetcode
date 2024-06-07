let isLongPressedName= function(name, typed){
    let nameIndex= 0;
    if(typed.length<name.length){
        return false;        
    }
    for(let i= 0; i<typed.length;){     
        if(name[nameIndex]==typed[i]){
            i++;
            nameIndex++;
        }
        else{
            if(typed[i-1]!=typed[i]){
                return false;
            }
            i++;
        }
    }
    return nameIndex==name.length;  
};