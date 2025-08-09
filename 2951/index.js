let findPeaks= function(mountain){
    let lastIndex= mountain.length-1;
    let peaks= [];
    
    for(let i= 1; i<mountain.length; i++){
        if(i<lastIndex){
            if(mountain[i]>mountain[i-1]){
                if(mountain[i]>mountain[i+1]){
                    peaks.push(i);
                }
            }
        }
    }

    return peaks;
};