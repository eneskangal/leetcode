let ProductOfNumbers= function(){
    this.stack= [];   
    this.length= 0; 
};


ProductOfNumbers.prototype.add= function(num){
    if(this.stack[0]==undefined){
        this.stack.push(num);
        this.length= 1;
    }  
    else{
        this.stack.unshift(num); 
        this.length+= 1;
        for(let i= 1; i<this.length; i++){
            this.stack[i]*= num;
        }           
    }
};

ProductOfNumbers.prototype.getProduct = function(k){
    return this.stack[k-1];    
};
