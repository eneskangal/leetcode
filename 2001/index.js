let interchangeableRectangles= function(rectangles){
    let hash= {};
    let count= 0;
    for(let i= 0; i<rectangles.length; i++){
        if(hash[rectangles[i][0]/rectangles[i][1]]==undefined){
            hash[rectangles[i][0]/rectangles[i][1]]= 1;
        }
        else{
            count+= hash[rectangles[i][0]/rectangles[i][1]];
            hash[rectangles[i][0]/rectangles[i][1]]+= 1;            
        }
    }
    return count;
};