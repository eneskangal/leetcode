let rectangleArray= [];
let SubrectangleQueries= function(rectangle){
    rectangleArray= [...rectangle];
};
SubrectangleQueries.prototype.updateSubrectangle= function(row1, col1, row2, col2, newValue){
    for(let i= row1; i<=row2; i++){
        for(let k= col1; k<=col2; k++){
            rectangleArray[i][k]= newValue;
        }
    } 
};
SubrectangleQueries.prototype.getValue = function(row, col) {
    return rectangleArray[row][col];
};