let MyStack= function(){
    this.stack= [];
    this.last= undefined;
};


MyStack.prototype.push= function(x){
    this.last= x;
    this.stack.push(x);
};


MyStack.prototype.pop= function(){
    let top= this.stack[this.stack.length-1];
    this.stack.pop();  
    this.last= this.stack[this.stack.length-1];
    return top;
};


MyStack.prototype.top= function(){
    return this.last;    
};


MyStack.prototype.empty= function(){
    return this.stack.length==0;    
};
