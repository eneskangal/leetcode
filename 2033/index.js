let minOperations= function(grid, x){
    let data= [];
    let dataLength= 0;
    for(let i= 0; i<grid.length; i++){
        for(let j= 0; j<grid[i].length; j++){
            data.push(grid[i][j]); 
            dataLength++;       
        }
    }
    data= data.sort((a,b)=>{
        return a-b;
    });

    let limit= Math.floor(dataLength/2);
    let count= 0;
    for(let i= 0; i<dataLength; i++){
        if(i!=limit){
            if(Math.abs(data[i]-data[limit])%x==0){
                count+= Math.abs(data[i]-data[limit])/x;
            }
            else{
                return -1;
            }
        }        
    }
    return count;    
};