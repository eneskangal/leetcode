let UndergroundSystem= function(){
    this.checkIns= {};
    this.travelData= {};
};

UndergroundSystem.prototype.checkIn= function(id, stationName, t){
    this.checkIns[id]= {stationName, t};   
};

UndergroundSystem.prototype.checkOut= function(id, endStation, t){
    const {["stationName"]: startStation, ["t"]: startTime}= this.checkIns[id];
    const routeKey= `${startStation}-${endStation}`;
    const travelTime= t - startTime;
    
    if (!this.travelData[routeKey]) {
        this.travelData[routeKey]= {totalTime: 0, count: 0};
    }

    this.travelData[routeKey].totalTime+= travelTime;
    this.travelData[routeKey].count+= 1;
    delete this.checkIns[id];      
};

UndergroundSystem.prototype.getAverageTime= function(startStation, endStation){
    const routeKey= `${startStation}-${endStation}`;
    const data= this.travelData[routeKey];
    return data.totalTime/data.count;
};