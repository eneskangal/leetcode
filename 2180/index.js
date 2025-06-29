let countEven= function(num){
  let stringConvertedNum=num.toString()
  let toplam=0
  for(let i=0; i<stringConvertedNum.length; i++){
    toplam+=parseInt(stringConvertedNum[i])    
  }
  return toplam%2==0 ? Math.trunc(num/2) : (num%2==0 ? num/2-1: Math.trunc(num/2)) 
}