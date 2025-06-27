/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(" ")
    s2 = s2.split(" ")
    let arr = []
    for(let i =0 ; i<s1.length ; i++){
        if(s2.includes(s1[i])){
            continue
        }
        else {
            arr.push(s1[i])
        }
    }

    for(let i =0 ; i<s2.length ; i++){
        if(s1.includes(s2[i])){
           continue
        }else{
             arr.push(s2[i])
        }
    }

    let result =[]

    for(let i =0 ; i< arr.length ; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            result.push (arr[i])
        }
    }

    return result

    
    
    
};