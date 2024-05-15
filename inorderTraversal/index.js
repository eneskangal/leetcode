let inorderTraversal = function* (arr) {
    arr = arr.flat(Infinity);
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
};