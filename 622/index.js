let MyCircularQueue= function(k){
    this.que= [];    
    this.k= k;
};

MyCircularQueue.prototype.enQueue= function(value){
    if(this.que[this.k-1]==undefined){
        this.que.push(value);
        return true;        
    }
    return false;        
};

MyCircularQueue.prototype.deQueue= function(){
    if(this.que[0]!=undefined){
        this.que.shift();
        return true;        
    }
    return false;    
};


MyCircularQueue.prototype.Front= function(){
    if(this.que[0]==undefined){
        return -1;
    }
    return this.que[0];  
};


MyCircularQueue.prototype.Rear= function(){
    if(this.que[0]==undefined){
        return -1;
    }
    return this.que[this.que.length-1];    
};


MyCircularQueue.prototype.isEmpty= function(){
    return this.que[0]==undefined;    
};


MyCircularQueue.prototype.isFull= function(){
    return this.que[this.k-1]!=undefined;     
};