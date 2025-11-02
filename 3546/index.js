let canPartitionGrid= function(grid){
    let n= grid.length, m= grid[0].length;
    const rowSum= new Array(n).fill(0);
    const colSum= new Array(m).fill(0);

    let tot= 0;
    for(let i= 0; i<n; ++i){
        for(let j= 0; j<m; ++j){
            tot+= grid[i][j];
            rowSum[i]+= grid[i][j];
            colSum[j]+= grid[i][j];
        }
    }

    for(let i= 0, sum= 0; i<n-1; ++i){
        sum+= rowSum[i];
        if(sum===tot-sum){
            return true;
        } 
    }

    for(let i= 0, sum= 0; i<m-1; ++i){
        sum+= colSum[i];
        if(sum===tot-sum){
            return true;
        }
    }        
    return false;
};