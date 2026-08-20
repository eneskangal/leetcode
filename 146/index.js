let LRUCache= function(capacity){
    this.capacity= capacity;
    this.length= 0;
    this.hash= new Map();
};


LRUCache.prototype.get= function(key){
    if(this.hash.get(key)==undefined){
        return -1;
    } 
    let value= this.hash.get(key); 
    this.hash.delete(key);
    this.hash.set(key, value);  
    return this.hash.get(key);
};


LRUCache.prototype.put= function(key, value){
    if(this.hash.get(key)!=undefined){
        this.hash.delete(key);
        this.hash.set(key, value);
    }
    else{
        if(this.capacity>this.length){
            this.hash.set(key, value);  
            this.length++;          
        }
        else{
            for(const [key, value] of this.hash.entries()){
                this.hash.delete(key);
                break;
            }
            this.hash.set(key, value);            
        }
    }    
};
