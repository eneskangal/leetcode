let TimeLimitedCache= function(){
    this.obj= {};    
    this.int= 0;
    this.timerId;
};

TimeLimitedCache.prototype.set= function(key, value, duration){
    if(this.int==0){
        this.int++;
        this.obj[key]= value;
        this.timerId= setTimeout(()=>{
            this.int--;
            delete this.obj[key];
        },duration);
        return false;
    }
    else if(this.obj[key]){
        this.obj[key]= value;
        clearTimeout(this.timerId);
        this.timerId= setTimeout(()=>{
            this.int--;
            delete this.obj[key];
        },duration);
        return true;
    }
    else{
        this.int++;
        this.obj[key]= value;
        setTimeout(()=>{
            this.int--;
            delete this.obj[key];
        },duration);
        return false;
    }
    
};

TimeLimitedCache.prototype.get= function(key){
    return this.obj[key]!=undefined ? this.obj[key] : -1;    
};

TimeLimitedCache.prototype.count= function(){
    return this.int;    
};
