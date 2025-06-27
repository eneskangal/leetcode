/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const array= [];
    let obj= {};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]!=undefined){
            array[obj[arr[i]]]+=  1;
        }
        else{            
            if(array.length==0){
                array[0]= 1;
                obj[arr[i]]= 0;
            }
            else{
                array.push(1);
                obj[arr[i]]= array.length-1;
            }
        }
    }
    obj= {};
    for(let i=0; i<array.length; i++){
        if(obj[array[i]]){
            return false;
        }
        obj[array[i]]= array[i];
    } 
    return true;      
};