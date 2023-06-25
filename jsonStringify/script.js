let jsonStringify= function(object){
    return JSON.stringify(object)   
}
console.log(jsonStringify(({ x: 5, y: 6 })))