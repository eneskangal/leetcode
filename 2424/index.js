let LUPrefix= function(n){
    this.uploaded= new Array(n + 2).fill(false);
    this.longestPrefix= 0;  
};


LUPrefix.prototype.upload= function(video){
    this.uploaded[video]= true;
    while(this.uploaded[this.longestPrefix + 1]){
      this.longestPrefix++;
    }   
};


LUPrefix.prototype.longest= function(){
    return this.longestPrefix;    
};

