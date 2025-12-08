let longestBeautifulSubstring= function(word){
    let max= 0;
    let stack= ["a", "e", "i", "o", "u"];
    let count= 0;
    let index= 0;

    for(let i= 0; i<word.length; i++){
        if(word[i]==stack[index]){
            index++;
            count++;
        }
        else if(word[i]==stack[index-1]){
            count++;            
        }
        else{
            if(index>4){
                max= Math.max(max, count);
            }
            if(word[i]=="a"){
                count= 1;
                index= 1;
            }
            else{
                count= 0;
                index= 0;
            }
        }
    }
    if(index>4){
        return Math.max(max, count);
    }
    else{
        return max;
    }
};