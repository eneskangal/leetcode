let appendCharacters= function(s, t){
    let length= t.length;
    let index= 0;
    let i= 0;
    while(index<s.length&&i<t.length){
        if(s[index]==t[i]){
            length--;       
            index++;
            i++;     
        }
        else{
            index++;
        }
    }
    return length;   
};