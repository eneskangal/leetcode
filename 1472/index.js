let BrowserHistory= function(homepage){
    this.stack= [homepage];    
    this.length= 1;
    this.index= 0;
};

BrowserHistory.prototype.visit= function(url){
    this.stack= [...this.stack.slice(0, this.index+1)];
    this.stack.push(url);  
    this.length= this.stack.length; 
    this.index= this.length-1;
};

BrowserHistory.prototype.back= function(steps){
    if(this.index-steps<0){
        this.index= 0;
        return this.stack[this.index];        
    }
    else{
        this.index-= steps;
        return this.stack[this.index];         
    }  
};
BrowserHistory.prototype.forward= function(steps){
    if(this.index+steps>=this.length){
        this.index= this.length-1;
        return this.stack[this.index];        
    }
    else{
        this.index+= steps;
        return this.stack[this.index];         
    }
};