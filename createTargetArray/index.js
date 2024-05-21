let createTargetArray = function (nums, index) {
    const array = [];
    for (let i = 0; i < nums.length; i++) {
        if (array[index[i]] != undefined) {
            array.splice(index[i], 0, nums[i]);
        }
        else {
            array[index[i]] = nums[i];
        }
    }
    return array;
};