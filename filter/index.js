let filter= function(arr, fn) {
    const array= [];
    for(let i=0; i<arr.length; i++){
        fn(arr[i], i) ? array.push(arr[i]) : null;
    }   
    return array; 
};

filter(function firstIndex(n, i) { return i === 0; }, [1,2,3]);