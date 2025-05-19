let rand10= function(){
    let row= rand7();
    let col= rand7();
    let calc= (row-1)*7+col;
    if(calc<41){
        return Math.ceil(calc/4);
    }
    while(true){
        row= rand7();
        col= rand7(); 
        calc= (row-1)*7+col;
        if(calc<41){
            return Math.ceil(calc/4);
        }       
    }
};