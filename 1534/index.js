function countGoodTriplets(arr, a, b, c){
  let count= 0;

  for(let i= 0; i<arr.length; i++){
    for(let j= i + 1; j< arr.length; j++){
      for(let k= j + 1; k< arr.length; k++){
        const diff1= Math.abs(arr[i] - arr[j]);
        const diff2= Math.abs(arr[j] - arr[k]);
        const diff3= Math.abs(arr[i] - arr[k]);

        if(diff1 <= a && diff2 <= b && diff3 <= c){
          count++;
        }
      }
    }
  }
  return count;
}
