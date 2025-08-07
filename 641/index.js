let MyCircularDeque= function(k){
    this.array= [];
    this.k= k;
    this.count= 0;    
};

MyCircularDeque.prototype.insertFront= function(value){
    if(this.count==this.k){
        return false;
    }   
    else{
        this.array.unshift(value);
        this.count++;
        return true;
    } 
};


MyCircularDeque.prototype.insertLast= function(value){
    if(this.count==this.k){
        return false;
    }   
    else{
        this.array.push(value);
        this.count++;
        return true;
    }    
};

MyCircularDeque.prototype.deleteFront= function(){
    if(this.array[0]==undefined){
        return false;
    }   
    this.array.shift();
    this.count--;
    return true; 
};


MyCircularDeque.prototype.deleteLast= function(){
    if(this.array[this.count-1]==undefined){
        return false;
    }   
    this.array.pop();
    this.count--;
    return true;     
};


MyCircularDeque.prototype.getFront= function(){
    return this.array[0]==undefined ? - 1 : this.array[0];     
};


MyCircularDeque.prototype.getRear= function(){
    return this.array[this.count-1]==undefined ? - 1 : this.array[this.count-1];    
};

MyCircularDeque.prototype.isEmpty= function(){
    return this.array[0]==undefined;    
};


MyCircularDeque.prototype.isFull= function(){
    return this.array[this.k-1]!=undefined;     
};