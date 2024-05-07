let average= function(salary){
    let maxSalary= 0;
    let minSalary= 9999999999;
    let sumSalary= 0;
    let extracted2Salary= salary.length-2;
    for(let i=0; i<salary.length; i++){
        if(salary[i]>=maxSalary){
            maxSalary= salary[i];
        }
        if(minSalary>=salary[i]){
            minSalary= salary[i];
        }
        sumSalary+= salary[i];
    } 
    return ((sumSalary-(maxSalary+minSalary))/extracted2Salary);
};