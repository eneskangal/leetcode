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