let findClosest= function(x, y, z){
    let xDiff= Math.abs(x-z);
    let yDiff= Math.abs(y-z);  

    if(xDiff<yDiff){
        return 1;
    }
    if(xDiff==yDiff){
        return 0;
    }   
    return 2;
};