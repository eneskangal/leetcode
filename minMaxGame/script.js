function prog(array){
    let sayılar=array.map(t=>t*1)
    let data
    let bool=true
    while(sayılar.length>1){
        data=[]
        for(let i=0; i<sayılar.length; i+=2){
            if(bool){
                let arr1=sayılar.slice(i,i+2)
                data.push(Math.min(...arr1))
                bool=false
            }
            else{
                data.push(Math.max(...sayılar.slice(i,i+2)))
                bool=true
            }
        }
        sayılar=data
    }
    return sayılar[0]
}
console.log(prog([1,2]));