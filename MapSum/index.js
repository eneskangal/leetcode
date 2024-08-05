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