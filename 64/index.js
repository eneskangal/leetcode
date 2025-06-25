let minPathSum= function(grid){
    let dp= new Array(grid.length);   
    for(let i= 0; i<grid.length; i++){
        dp[i]= new Array(grid[i].length);
    }    
    for(let i= 0; i<grid.length; i++){
        for(let k= 0; k<grid[0].length; k++){
            if(i==0&&k==0){
                dp[i][k]= grid[i][k];                
            }
            else if(i>0&&k==0){
                dp[i][k]= dp[i-1][0]+grid[i][k];               
            }            
            else if(i==0&&k>0){
                dp[i][k]= dp[i][k-1]+grid[i][k];                
            }
            else{
                dp[i][k]= grid[i][k]+Math.min(dp[i][k-1], dp[i-1][k])
            }            
        }
    } 
    return dp[grid.length-1][grid[0].length-1];
};