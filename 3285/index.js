let stableMountains= function(height, threshold){
    let indexes= [];
    for(let i= 1; i<height.length; i++){
        if(height[i-1]>threshold){
            indexes.push(i);
        }
    }
    return indexes;    
};