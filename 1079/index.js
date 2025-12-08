let numTilePossibilities= function(tiles){
    tiles= tiles.split("");
    let hash= {};
    let copy= [...tiles];
    let count= 0;
    function recursive(array, string){
        let copy2= [...array];
        for(let i= 0; i<array.length; i++){
            if(!hash[string+array[i]]){
                count++;
                hash[string+array[i]]= true;
            }
            let arrayElement= array[i];
            array.splice(i, 1);
            recursive(array, string+arrayElement);
            array= [...copy2];
        } 
    }
    for(let i= 0; i<tiles.length; i++){
        if(!hash[tiles[i]]){
            count++;
            hash[tiles[i]]= true;
        }
        let arrayElement= tiles[i];
        tiles.splice(i, 1);
        recursive(tiles, arrayElement);
        tiles= [...copy];
    } 
    return count;   
};