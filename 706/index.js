let MyHashMap= function(){
    this.hash= {};    
};

MyHashMap.prototype.put= function(key, value){
    this.hash[key]= value;    
};

MyHashMap.prototype.get= function(key){
    if(this.hash[key]==undefined){
        return -1;
    }  
    return this.hash[key];  
};

MyHashMap.prototype.remove= function(key){
    delete this.hash[key];    
};