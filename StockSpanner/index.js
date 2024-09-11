let StockSpanner= function(){
    this.stock= [];    
};

StockSpanner.prototype.next= function(price){
    let count= 1;
    for(let i=0; ithis.stock.length; i++){
        if(this.stock[i] = price){
            count++;
        }
        else if(this.stock[i]price){
            break;
        }
    }
    this.stock.unshift(price);
    return count;    
};