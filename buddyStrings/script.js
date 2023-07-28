let buddyStrings = function(s, goal){
    let bool=true
    let count=0 
    let set=new Set()
    let ilkHarf
    let ikinciHarf
    if(goal.length!=s.length){
        return false
    }
    for(let i=0; i<s.length; i++){
        set.add(s[i])
        if(count>2){
            return false            
        }
        else{
            if(s[i]!=goal[i]&&ilkHarf==undefined&&bool){
                if(i==s.length-1){
                    return false
                }
                ilkHarf=s[i]
                ikinciHarf=goal[i]
                count++
            }            
            else if(s[i]!=goal[i]&&ilkHarf!="undefined"){
                if(ilkHarf!=goal[i]||ikinciHarf!=s[i]){                    
                    return false
                }
                else{
                    ilkHarf=undefined
                    ikinciHarf=undefined
                    bool=false
                    count++
                }
            }
            else if(s[i]!=goal[i]){
                console.log("enes", i)
                ++count
            }            
        }                                    
    }  
    return (count==2)||(set.size<goal.length&&(ikinciHarf==undefined))&&(ikinciHarf==undefined) ? true : false
}
console.log(buddyStrings("ab","ba"))