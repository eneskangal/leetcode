let secondsBetweenTimes= function(startTime, endTime){
    let previousDate= new Date(2026, 6, 27, startTime.slice(0,2), startTime.slice(3,5), startTime.slice(6));
    let endDate= new Date(2026, 6, 27, endTime.slice(0,2), endTime.slice(3,5), endTime.slice(6));   

    return (endDate-previousDate)/1000;         
};