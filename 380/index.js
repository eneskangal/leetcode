let RandomizedSet= function(){
    this.set= {}; 
};


RandomizedSet.prototype.insert= function(val){
    if(this.set[val]!=undefined){
        return false;
    }    
    else{
        this.set[val]= val;
        return true;
    }
};

RandomizedSet.prototype.remove= function(val){
    if(this.set[val]!=undefined){
        delete this.set[val];
        return true;
    }    
    else{
        return false;
    }    
};

RandomizedSet.prototype.getRandom= function(){
    let vals= Object.values(this.set);
    return vals[Math.trunc(Math.random()*vals.length)]  
};