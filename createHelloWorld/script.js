let createHelloWorld= function(){
    return function(...args) {
        return "Hello World"        
    }
}
console.log(createHelloWorld()([{},null,42]))