function maxScore(nums){
    nums.sort((a, b) => b - a);

    let prefixSum= 0;
    let score= 0;
    for(let num of nums){
        prefixSum+= num;
        if(prefixSum > 0){
            score++;
        } 
        else{
            break;
        }
    }
    return score;
}