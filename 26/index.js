let removeDuplicates= function(nums){
    let obj= {};
    let fakeNums= [...nums];
    
    for(let i=0; i<fakeNums.length; i++){
        if(obj[fakeNums[i]]==undefined){
            obj[fakeNums[i]]= fakeNums[i];
        }
        else{
            nums.splice(nums.indexOf(fakeNums[i]), 1);
        }
    }
    return nums.length;   
};