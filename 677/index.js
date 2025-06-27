let MapSum= function(){
    this.hash= {};    
};

MapSum.prototype.insert= function(key, val){
    this.hash[key]= val;    
};

MapSum.prototype.sum= function(prefix){
    let sum= 0;
    for(const prop in this.hash){
        if(prop.indexOf(prefix)==0){
            sum+= this.hash[prop];
        }        
    }
    return sum;    
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */