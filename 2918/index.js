function minSum(nums1, nums2){
    const sumAndZeros= (arr) =>{
        let sum= 0;
        let zeroCount= 0;
        for(let num of arr){
            if(num === 0) zeroCount++;
            else sum+= num;
        }
        return [sum, zeroCount];
    };

    let [sum1, zeros1]= sumAndZeros(nums1);
    let [sum2, zeros2]= sumAndZeros(nums2);

    let minTotal1= sum1 + zeros1 * 1;
    let minTotal2= sum2 + zeros2 * 1;

    let maxMinTotal= Math.max(minTotal1, minTotal2);

    let need1= maxMinTotal - sum1;
    let need2= maxMinTotal - sum2;

    if(need1<= zeros1*1e11 && need1>=zeros1*1 &&
        need2<=zeros2 * 1e11&&need2 >= zeros2*1){
        return maxMinTotal;
    }
    return -1;
}