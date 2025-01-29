let PeekingIterator= function(iterator){
    this.hasNexts= [];
    this.results= [];
    this.hasesIndex= 0;
    this.resultsIndex= 0;

    while(iterator.hasNext()){
        this.hasNexts.push(iterator.hasNext());
        this.results.push(iterator.next());
    }
};

PeekingIterator.prototype.peek= function(){
    return this.results[this.resultsIndex];    
};

PeekingIterator.prototype.next= function(){
    this.resultsIndex= this.resultsIndex+1;
    this.hasesIndex= this.hasesIndex+1;
    return this.results[this.resultsIndex-1]; 
};

PeekingIterator.prototype.hasNext= function(){   
    return this.hasNexts[this.hasesIndex]==undefined ? false : true;
};