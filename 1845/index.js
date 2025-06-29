let SeatManager= function(n){
    this.current= 1;    
    this.obj= {};
    this.stack= [];
};


SeatManager.prototype.reserve= function(){
    if(this.stack.length==0){
        let copy= this.current;
        this.current++;
        this.obj[copy]= copy;
        return copy; 
    }
    else{
        let copy= this.stack[0];        
        this.obj[this.stack[0]]= this.stack[0];
        this.stack.shift();
        return copy;  
    }   
};

SeatManager.prototype.unreserve= function(seatNumber){    
    if(this.stack.length==0){
        this.stack.push(seatNumber);        
    }
    else{
        let isIn= false;
        for(let i= 0; i<this.stack.length; i++){
            if(seatNumber<this.stack[i]){
                isIn= true;
                this.stack.splice(i,0,seatNumber);
                break;
            }        
        }
        if(!isIn){
            this.stack.push(seatNumber);    
        }
    }
    delete this.obj[seatNumber];  
};