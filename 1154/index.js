let dayOfYear= function(date){
    let firstTime= new Date(date.slice(0,4)+"-01-01");
    let nowTime= new Date(date); 
    let diff= nowTime-firstTime;
    return (diff/86400000)+1;
};