let maxDistance= function(moves){
    let x= 0;
    let y= 0;
    let count= 0;

    for(let i= 0; i<moves.length; i++){
        if(moves[i]=="U"){
            y++;
        }
        else if(moves[i]=="D"){
            y--;
        }
        else if(moves[i]=="R"){
            x++;
        }
        else if(moves[i]=="L"){
            x--;
        }
        else{
           count++;
        }      
    }
    
    return Math.abs(x) + Math.abs(y) + count;    
};