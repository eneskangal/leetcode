let matrixSum= function(nums){
    for(let row of nums){
        row.sort((a, b) => b - a);
    }

    let score= 0;
    let cols= nums[0].length;

    for(let i= 0; i<cols; i++){
        let max= 0;

        for(let row of nums){
            max= Math.max(max, row[i]);
        }
        score += max;
    }
    return score;
};
