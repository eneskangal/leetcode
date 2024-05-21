let flipAndInvertImage= function(image){
    const array= [];
    for(let i=0; i<image.length; i++){
        const subArray= [];
        for(let k=image[i].length-1; k>-1; k--){
            subArray.push(!image[i][k]);
        }
        array.push(subArray);
    }
    return array;
};