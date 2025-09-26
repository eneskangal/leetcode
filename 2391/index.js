function garbageCollection(garbage, travel){
    let totalTime= 0;

    for(let g of garbage){
        totalTime+= g.length;
    }

    let lastIndex= {
        'M': 0,
        'P': 0,
        'G': 0
    };

    for(let i= 0; i<garbage.length; i++){
        if(garbage[i].includes('M')) lastIndex['M']= i;
        if(garbage[i].includes('P')) lastIndex['P']= i;
        if(garbage[i].includes('G')) lastIndex['G']= i;
    }

    let prefixSum= [0];
    for(let i= 0; i<travel.length; i++){
        prefixSum[i+1]= prefixSum[i]+travel[i];
    }

    totalTime+= prefixSum[lastIndex['M']];
    totalTime+= prefixSum[lastIndex['P']];
    totalTime+= prefixSum[lastIndex['G']];

    return totalTime;
}
