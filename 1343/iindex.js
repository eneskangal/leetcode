function numOfSubarrays(arr, k, threshold){
    let count= 0;
    let windowSum= 0;
    let targetSum= threshold * k;

    for(let i= 0; i<k; i++){
        windowSum+= arr[i];
    }

    if(windowSum>=targetSum){
        count++;
    }

    // Diğer pencerelere kayarak ilerle
    for(let i= k; i<arr.length; i++){
        windowSum= windowSum-arr[i - k]+arr[i];
        if(windowSum>=targetSum){
            count++;
        }
    }
    return count;
}