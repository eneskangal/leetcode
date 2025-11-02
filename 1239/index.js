let maxLength= function(arr){
    let max= 0;
    function isUnique(string){
        let hash= {};
        let count= 0;
        for(let i= 0; i<string.length; i++){
            if(hash[string[i]]==undefined){
                hash[string[i]]= true;
                count++;
            }
            else{
                return 0;
            }
        }
        return count;
    }

    function backTrack(string, index){
        for(index; index<arr.length; index++){
            let result= isUnique(string+arr[index]);
            if(result!=0){
                if(max<result){
                    max= result;
                }
            }
            backTrack(string+arr[index], index+1);
        }
    }

    for(let i= 0; i<arr.length; i++){
        let result= isUnique(arr[i]);
        if(result!=0){
            if(max<result){
                max= result;
            }
        }
        backTrack(arr[i], i+1);
    }    

    return max;
};