let findWinners= function(matches){
    let winners= {};
    let oneMathLoses= {};
    let losers= {};

    for(let i= 0; i<matches.length; i++){
        if(oneMathLoses[matches[i][0]]==undefined&&losers[matches[i][0]]==undefined){
            winners[matches[i][0]]= matches[i][0];
        }
        if(winners[matches[i][1]]==undefined){
            if(oneMathLoses[matches[i][1]]==undefined&&losers[matches[i][1]]==undefined){
                oneMathLoses[matches[i][1]]= matches[i][1];
            }
            else{
                delete oneMathLoses[matches[i][1]];
                losers[matches[i][1]]= matches[i][1];
            }
        }
        else{
            if(oneMathLoses[matches[i][1]]==undefined){
                delete winners[matches[i][1]];
                oneMathLoses[matches[i][1]]= matches[i][1];
            }
            else{
                delete oneMathLoses[matches[i][1]];
                losers[matches[i][1]]= matches[i][1];
            }            
        }
    }    

    return [[...Object.values(winners)], [...Object.values(oneMathLoses)]];
};