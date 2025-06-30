/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
let reset;
let previousValue;
let createCounter= function(init){
    if(reset==undefined||reset!=init){
        reset= init;
        previousValue= init;
    }    
    return{
        increment: ()=>{
            previousValue++;
            return previousValue;
        },
        reset: ()=>{
            previousValue= reset;
            return previousValue
        },
        decrement: ()=>{
            previousValue--;
            return previousValue;
        },
    }    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */