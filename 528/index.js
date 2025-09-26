class Solution{
  constructor(w){
    this.prefixSums= [];
    this.total= 0;

    for(let weight of w){
      this.total+= weight;
      this.prefixSums.push(this.total);
    }
  }

  pickIndex(){
    const target= Math.random() * this.total;

    let low= 0, high= this.prefixSums.length - 1;
    while(low < high){
      let mid= Math.floor((low + high) / 2);
      if (target >= this.prefixSums[mid]){
        low= mid + 1;
      } 
      else{
        high= mid;
      }
    }
    return low;
  }
}