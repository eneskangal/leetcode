let Trie= function(){
    this.tries= [];    
};

Trie.prototype.insert= function(word){
    this.tries.push(word);    
};

Trie.prototype.search= function(word){
    for(let i= 0; i<this.tries.length; i++){
        if(this.tries[i]==word){
            return true;
        }
    }
    return false;
};

Trie.prototype.startsWith= function(prefix){
    for(let i= 0; i<this.tries.length; i++){
        if(this.tries[i].indexOf(prefix)==0){
            return true;
        }
    }
    return false;        
};