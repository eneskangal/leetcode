let CustomStack= function(maxSize){
    this.max= maxSize;    
    this.stack= [];
};


CustomStack.prototype.push= function(x){
    if(this.stack.length<this.max){
        this.stack.push(x);
    }  
};


CustomStack.prototype.pop = function() {
    if(this.stack.length==0){
        return -1;
    }
    else{
        let copy= this.stack[this.stack.length-1];
        this.stack.pop();
        return copy;
    }
};

CustomStack.prototype.increment= function(k, val) {
    if(this.stack.length>=k){
        for(let i= 0; i<k; i++){
            this.stack[i]+= val;
        }
    } 
    else{
        for(let i= 0; i<this.stack.length; i++){
            this.stack[i]+= val;
        }
    }   
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */