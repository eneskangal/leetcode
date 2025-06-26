let Solution= function(nums){
    this.array= nums;
    this.res= [...nums];    
};

Solution.prototype.reset= function(){
    this.array= [...this.res];
    return this.res;    
};


Solution.prototype.shuffle= function(){
    let array= [];
    while(this.array.length>0){
        let randomIndex= Math.floor(Math.random()*this.array.length);
        array.push(this.array[randomIndex]);
        this.array.splice(randomIndex, 1);
    }
    this.array= [...this.res];
    return array;    
};