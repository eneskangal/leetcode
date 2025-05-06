let convertDateToBinary= function(date){
    return parseInt(date.slice(0, 4)).toString(2)+"-"+parseInt(date.slice(5, 7)).toString(2)+"-"+parseInt(date.slice(8)).toString(2);    
};