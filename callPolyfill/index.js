Function.prototype.callPolyfill= function(context, ...args){
    return this.call(context, ...args);
}