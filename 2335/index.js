let fillCups= function(amount){
    return Math.max(Math.max(...amount), Math.ceil((amount[0]+amount[1]+amount[2])/2));   
};