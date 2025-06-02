let checkRecord= function(s){
    let absentLength= 0;
    for(let i= 0; i<s.length; i++){
        if(s[i]=="A"){
            if(absentLength==1){
                return false;
            }
            else{
                absentLength++;
            }
        }
        else if(s[i]=="L"){
            if(s[i+1]=="L"&&s[i+2]=="L"){
                return false;
            }
        }
    }
    return true;    
};