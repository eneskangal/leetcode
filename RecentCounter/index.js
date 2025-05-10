let RecentCounter= function(){
    this.array= [];    
};


RecentCounter.prototype.ping= function(t){
    let count= 0;
    let decrease= t-3000;
    for(let i= 0; i<this.array.length; i++){
        if(this.array[i]>=decrease){
            count++;
        }
    }
    this.array.push(t);
    return count+1;
};
