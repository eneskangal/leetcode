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