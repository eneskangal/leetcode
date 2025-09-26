let checkArithmeticSubarrays= function(nums, l, r){
    let answers= [];

    function isArithmetic(arr){
        arr= arr.sort((a,b)=>{
            return a-b;
        });
        let diff= arr[1]-arr[0];

        for(let i= 2; i<arr.length; i++){
            if(diff!=arr[i]-[arr[i-1]]){
                return false;
            }
        }
        return true;
    }
    
    for(let i= 0; i<l.length; i++){
        let array= nums.slice(l[i], r[i]+1);
        answers.push(isArithmetic(array));
    }  
    return answers;  
};