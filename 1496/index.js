let isPathCrossing= function(path){
    let x= 0; 
    let y= 0;
    const obj= {};
    obj[`${x}+${y}`]= 1;
    for(let i= 0; i<path.length; i++){
        if(path[i]=="N"){
            y++;
            if(obj[`${x}+${y}`]==undefined){
                obj[`${x}+${y}`]= 1;
            }
            else{
                return true;
            }
        }
        else if(path[i]=="S"){
            y--;
            if(obj[`${x}+${y}`]==undefined){
                obj[`${x}+${y}`]= 1;
            }
            else{
                return true;
            }
        }
        else if(path[i]=="E"){
            x++;
            if(obj[`${x}+${y}`]==undefined){
                obj[`${x}+${y}`]= 1;
            }
            else{
                return true;
            }
        }
        else if(path[i]=="W"){
            x--;
            if(obj[`${x}+${y}`]==undefined){
                obj[`${x}+${y}`]= 1;
            }
            else{
                return true;
            }
        }
    }  
    return false; 
};