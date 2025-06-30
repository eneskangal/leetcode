/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let firstValue= await promise1.then((firstValue)=>{return firstValue});
    let secondValue= await promise2.then((secondValue)=>{return secondValue});
    return firstValue+secondValue;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */