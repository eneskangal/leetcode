let digitSum= function(s, k){
  while(s.length>k){
    let returnofString= "";
    let sum= 0;
    let index= 0;
    for(let i= 0; i<s.length; i++){
      if(index==0){
        sum= s[i]*1;
        index++;
      }
      else if(index<k){
        index++;
        sum+= s[i]*1;
      }
      else{
        index= 1;
        returnofString+= sum;
        sum= s[i]*1;
      }
    }
    s= returnofString+sum;
  }    
  return s; 
};