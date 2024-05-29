let maxWidthOfVerticalArea= function(points){
    let array= [];    
    for(let i=0; i<points.length; i++){
        array.push(points[i][0]);
    }
    array= array.sort((a,b)=>{return a-b});
    let max= array[1]-array[0];
    for(let i=2; i<array.length; i++){
        if(max<array[i+1]-array[i]){
            max= array[i+1]-array[i];
        }
    }
    return max;
};