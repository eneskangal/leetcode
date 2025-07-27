let SmallestInfiniteSet= function(){
    this.numbers= {};   
    this.smallest= 1; 
    this.previous= [];
};


SmallestInfiniteSet.prototype.popSmallest= function(){
    if(this.previous[0]==undefined){
        this.numbers[this.smallest]= false;
        let num= this.smallest;
        this.smallest++;
        return num;  
    }  
    else{
        this.numbers[this.previous[0]]= false;
        let num= this.previous[0];
        this.previous.shift();
        return num;  
    }
};

SmallestInfiniteSet.prototype.addBack= function(num){
    if(this.numbers[num]==false){
        this.numbers[num]= true;
        this.previous.push(num);
        this.previous= this.previous.sort((a,b)=>{
            return a-b;
        });
    }        
};
