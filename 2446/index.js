let haveConflict= function(event1, event2){
    function toMinutes(time){
        const [hours, minutes]= time.split(":").map(Number);
        return hours* 60+minutes;
    }
    const start1= toMinutes(event1[0]);
    const end1= toMinutes(event1[1]);
    const start2= toMinutes(event2[0]);
    const end2= toMinutes(event2[1]);
    return !(end1 < start2 || end2 < start1);    
};