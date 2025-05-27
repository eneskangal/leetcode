let merge= function(intervals){
    let data= [];
    intervals= intervals.sort((a,b)=>{
        return a[0]-b[0];
    });
    
    for(let i= 0; i<intervals.length; i++){
        if(i==0){
            data.push([intervals[i][0], intervals[i][1]]);
        }
        else{
            if(data[data.length-1][1]>=intervals[i][0]){
                if(data[data.length-1][1]<=intervals[i][1]){
                    data[data.length-1][1]= intervals[i][1];
                }
            }
            else{
                data.push([intervals[i][0], intervals[i][1]]);
            }
        }       
    }
    return data;
};