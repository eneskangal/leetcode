let firstUniqChar= function(s){
    let data=[]
    for(let i=0; i<s.length; i++){            
        if(s.indexOf(s[i],i+1)==-1&&data.includes(s[i])==false){
            return i
        }
        else{
            data.push(s[i])
        }                
    }
    return -1          
}
console.log(firstUniqChar("leetcode"))