let combinationSum= function(candidates, target){
    let array= [];
    function backtrack(subArray, value, index){
        for(let i= index; i<candidates.length; i++){
            if(value==candidates[i]){
                array.push([...subArray, candidates[i]]);
            }
            else if(value>candidates[i]){
                backtrack([...subArray, candidates[i]], value-candidates[i], i);  
            }
        }                 
    }

    for(let i= 0; i<candidates.length; i++){
        if(candidates[i]==target){
            array.push([candidates[i]])
        }
        else{
            backtrack([candidates[i]], target-candidates[i], i);           
        }
    }

    return array;    
};