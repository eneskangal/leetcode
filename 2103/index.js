/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings){
    const array= [];
    let count= 0;
    for(let i=0; i<rings.length;){
        if(array[rings[i+1]]==undefined){
            array[rings[i+1]]= [rings[i]];
        }
        else{
            if(array[rings[i+1]].length<3){
                if(!array[rings[i+1]].includes(rings[i])){
                    array[rings[i+1]].push(rings[i]);
                    if(array[rings[i+1]].length==3){
                        count++;
                    }
                }
            }            
        }
        i+=2;
    }
    return count;
};