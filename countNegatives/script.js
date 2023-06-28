let countNegatives= function(grid){
    let deger=0
    for(let i=0; i<grid.length; i++){
        for(let k=0; k<grid[i].length; k++){
            if(grid[i][k]<0){
                deger++
            }
        }
    }
    return deger
}
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))