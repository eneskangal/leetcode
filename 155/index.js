let MinStack= function(){
    this.array= [];    
    this.last=  -1;
};

MinStack.prototype.push= function(val){
    this.array.push(val);    
    this.last++;
};

MinStack.prototype.pop= function(){
    this.array.pop();  
    this.last--;       
};

MinStack.prototype.top= function(){
    return this.array[this.last];    
};

MinStack.prototype.getMin= function(){
    return Math.min(...this.array);    
};