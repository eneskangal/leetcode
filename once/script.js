let once= function(fn){
    let boolean=true
    return function(...args){
        while(boolean){
            boolean=false
            return fn(...args.slice(0,arguments.slice))
        }     
    }      
}