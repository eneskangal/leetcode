let minMovesToSeat= function(seats, students){
    let count=0
    while(seats.length>0){
        let max=Math.max(...students)
        let max2=Math.max(...seats)
        count+=Math.abs(max-max2)
        seats.splice(seats.indexOf(max2,0),1)
        students.splice(students.indexOf(max,0),1)               
    }
    return count           
}