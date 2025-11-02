let sumEvenAfterQueries= function(nums, queries){
    let evenSum= 0;

    for(let i= 0; i<nums.length; i++){
        if(nums[i]%2==0){
            evenSum+= nums[i];
        }
    } 

    let answers= [];

    for(let i= 0; i<queries.length; i++){
        if(nums[queries[i][1]]%2==0){
            if((nums[queries[i][1]]+(queries[i][0]))%2==0){
                evenSum-= nums[queries[i][1]];
                evenSum+= nums[queries[i][1]]+(queries[i][0]);
                nums[queries[i][1]]+= (queries[i][0]);                     
            }
            else{
                evenSum-= nums[queries[i][1]]; 
                nums[queries[i][1]]+= (queries[i][0]);                
            }
        }
        else{
            if((nums[queries[i][1]]+(queries[i][0]))%2==0){                
                evenSum+= nums[queries[i][1]]+(queries[i][0]); 
                nums[queries[i][1]]+= (queries[i][0]);      
            } 
            else{
                nums[queries[i][1]]+= (queries[i][0]); 
            }                       
        }    
        answers.push(evenSum);
    }   
    return answers;
};