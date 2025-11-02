let numberOfWeeks= function(milestones){
  const total= milestones.reduce((a, b) => a + b, 0);
  
  const max_m= Math.max(...milestones);
  
  if(max_m<=total-max_m){
    return total;
  }

  return (total - max_m) * 2 + 1;
};