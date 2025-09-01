let longestSubarray= function(nums){
    const maxVal= Math.max(...nums);
    let maxLen= 0;
    let currentLen= 0;

    for(let num of nums){
        if(num===maxVal){
            currentLen+= 1;
            maxLen= Math.max(maxLen, currentLen);
        } 
        else{
            currentLen= 0;
        }
    }
    return maxLen;   
};