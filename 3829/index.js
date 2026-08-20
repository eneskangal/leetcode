let RideSharingSystem= function(){
    this.drivers= new Set();
    this.riders= new Set();
};


RideSharingSystem.prototype.addRider= function(riderId){
    this.riders.add(riderId);
};


RideSharingSystem.prototype.addDriver= function(driverId){
    this.drivers.add(driverId);    
};


RideSharingSystem.prototype.matchDriverWithRider= function(){
    let array= [-1, -1];
    for(const entry of this.drivers){        
        for(const entry2 of this.riders){
            array[0]= entry;
            array[1]= entry2;
            this.drivers.delete(entry);
            this.riders.delete(entry2);            
            break;
        }
        break;
    }
    return array; 
};

RideSharingSystem.prototype.cancelRider= function(riderId){
    this.riders.delete(riderId);
};