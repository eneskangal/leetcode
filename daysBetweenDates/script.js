let daysBetweenDates= function(date1, date2){
    return new Date(date1)>=new Date(date2) ?
    (new Date(date1)-new Date(date2))/86400000
    :(new Date(date2)-new Date(date1))/86400000    
}
console.log(daysBetweenDates("2019-06-29","2019-06-30"))