/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

let debounce= function(fn, t){ 
    let previous;
    let timer;   
    return function(...args){
        if(previous==undefined){
            previous= Date.now();
        }
        else if(Date.now()-previous<t){
            clearInterval(timer);
            previous= Date.now();
        }                 
        timer= setTimeout(()=>{
            previous= Date.now()
            return fn(...args);            ;
        },t)             
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */