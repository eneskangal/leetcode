let timeLimit= function(fn, t){    
    return async function(...args){
        return new Promise((resolve,reject) => {
            setTimeout(() => reject("Time Limit Exceeded"),t);
            fn(...args).then(resolve).catch(reject)
        })      
    }
};