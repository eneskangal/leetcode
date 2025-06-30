function memoize(fn){   
    const memo= {};  
    return function(...args){
        if(args.length==1){
            if(memo[args[0]]==undefined){
                memo[args[0]]= fn(...args);
                return memo[args[0]];
            }
            else{
                return memo[args[0]];
            }
        }
        else{
            if(memo[args[0]+"+"+args[1]]==undefined){
                memo[args[0]+"+"+args[1]]= fn(...args);
                return memo[args[0]+"+"+args[1]];
            }
            else{
                return memo[args[0]+"+"+args[1]];
            }            
        }              
    }
}