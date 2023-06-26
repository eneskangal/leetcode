class ArrayWrapper{
    constructor(array){
        this.array=array
    }    
}

ArrayWrapper.prototype.valueOf= function(){
    let deger=0
    for(let i=0; i<this.array.length; i++){
        deger+=this.array[i]
    }
    return deger    
}

ArrayWrapper.prototype.toString= function(){
    return "["+this.array.toString()+"]"    
}
console.log(new ArrayWrapper([1,7])+new ArrayWrapper([3,4]), new ArrayWrapper([1,2]).toString())