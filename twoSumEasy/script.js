const twoSum= (array, goal) =>{
   let indexes = []
   for(let i=0; i<array.length; i++){
       for(let j=i+1; j<array.length; j++){
         if(array[i]+array[j]===goal) {
            indexes.push(i);
            indexes.push(j);
         }
       }
    }
    return indexes;
}
console.log(twoSum([2,7,11,15],9))