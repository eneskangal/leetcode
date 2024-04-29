let addTwoPromises= async function(promise1, promise2){
    let firstValue= await promise1.then((firstValue)=>{return firstValue});
    let secondValue= await promise2.then((secondValue)=>{return secondValue});
    return firstValue+secondValue;
};

addTwoPromises(
	new Promise(resolve => setTimeout(() => resolve(2), 20)),
	new Promise(resolve => setTimeout(() => resolve(5), 60))
);