var searchRange = function(nums, target) {
  let i = 0,
    j = nums.length - 1,
    start = -1,
    end = -1,
    mid = -1;

  while (i <= j) {
    mid = ~~(i + (j - i) / 2);

    if (nums[mid] === target) {
      start = mid;
      end = mid;
      while (nums[start - 1] === target) {
        start -= 1;
      }
      while (nums[end + 1] === target) {
        end += 1;
      }
      return [start, end];
    } else if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return [start, end];
};