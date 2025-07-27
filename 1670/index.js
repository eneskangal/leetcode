let FrontMiddleBackQueue= function(){
    this.queue= []; 
    this.count= 0;   
};

FrontMiddleBackQueue.prototype.pushFront= function(val){
    this.queue.unshift(val);    
    this.count++;
};

FrontMiddleBackQueue.prototype.pushMiddle= function(val){
    let middle;
    if(this.count%2==1){
        middle= Math.trunc(this.count/2);        
        this.queue.splice(middle, 0, val);
        this.count++;
    }
    else{
        middle= Math.trunc(this.count/2);
        this.queue.splice(middle, 0, val);
        this.count++;
    }    
};

FrontMiddleBackQueue.prototype.pushBack= function(val){
    this.queue.push(val);
    this.count++;    
};


FrontMiddleBackQueue.prototype.popFront= function(){    
    if(this.queue[0]==undefined){
        return -1;
    }
    let num= this.queue[0];
    this.queue.shift();
    this.count--;   
    return num;    
};


FrontMiddleBackQueue.prototype.popMiddle= function(){
    if(this.count%2==0){
        middle= Math.trunc(this.count/2);
        let num= this.queue[middle-1];
        if(num==undefined){
            return -1;
        }
        this.queue.splice(middle-1, 1);
        this.count--;
        return num;
    }
    else{
        middle= Math.trunc(this.count/2);
        let num= this.queue[middle];
        this.queue.splice(middle, 1);
        this.count--;
        return num;
    }
};


FrontMiddleBackQueue.prototype.popBack= function(){
    if(this.queue[this.count-1]==undefined){
        return -1;
    }
    let num= this.queue.pop();
    this.count--;   
    return num;  
};