let MedianFinder= function(){
    this.array= [];    
};

MedianFinder.prototype.addNum= function(num){    
    if(this.array.length>0){
        for(let i= this.array.length-1; i>-1; i--){
            if(this.array[i]<=num){
                this.array.splice(i+1, 0, num);
                break;
            }
            if(i==0){
                this.array.unshift(num);
                break;
            }
        }    
    }
    else{
        this.array.push(num);
    }    
};


MedianFinder.prototype.findMedian= function(){   
    if(this.array.length%2==1){
        return this.array[Math.trunc(this.array.length/2)];
    }
    else{
        let left= this.array[(this.array.length/2)-1];
        let right= this.array[(this.array.length/2)];
        return (left+right)/2;
    }    
};
