let calculateScore= function(instructions, values){
    let index= 0;
    let score= 0;
    let hash= {};
    while(true){
        if(index<=-1){
            return score;
        }
        if(index>=values.length){
            return score;
        }
        if(hash[index]!=undefined){
            return score;
        }
        else if(instructions[index]=="add"){
            hash[index]= true;
            score+= values[index];
            index++;
        }
        else{
            hash[index]= true;
            index+= values[index];
        }
    }    
};