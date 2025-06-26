/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10= function(){
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