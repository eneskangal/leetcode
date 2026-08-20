let RLEIterator= function(encoding){
    this.encoding= encoding;    
    this.index= 0;
};


RLEIterator.prototype.next= function(n){
    while(this.encoding[this.index]==0){
        this.index+= 2;
    }
    if(n==this.encoding[this.index]){
        this.encoding[this.index]= 0; 
        let copy= this.index;
        this.index+= 2;
        return this.encoding[copy+1]; 
    }
    else if(n<this.encoding[this.index]){
        this.encoding[this.index]-= n; 
        return this.encoding[this.index+1]; 
    }
    else{
        while(n>this.encoding[this.index]){
            n-= this.encoding[this.index];
            this.encoding[this.index]= 0; 
            let copy= this.index;
            this.index+= 2;            
        }
        if(n==this.encoding[this.index]){
            let copy= this.index;
            this.index+= 2;
            return this.encoding[copy+1]; 
        }
        else if(n<this.encoding[this.index]){
            this.encoding[this.index]-= n; 
            return this.encoding[this.index+1]; 
        }
        return this.encoding[this.index+1]== undefined ? -1 :  this.encoding[this.index+1];
    }        
};