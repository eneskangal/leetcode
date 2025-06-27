let minTimeToVisitAllPoints= function(points){
    let move= 0;
    for(let i=0; i<points.length-1; i++){
        const x= Math.abs(points[i+1][0]-points[i][0]);
        const y= Math.abs(points[i+1][1]-points[i][1]);
        if(x>=y){
            move+= y+x-y;
        }
        else{
            move+= x+y-x;
        }
    }
    return move;    
};