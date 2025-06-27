let findErrorNums = function(nums){
    let data=[]
    let degisken
    for(let c=1; c<=nums.length; c++){
        console.log(degisken, data)
        let filter=nums.filter(t=> t==c)
        if(filter.length>1){
            if(data.length==1&&degisken!=undefined){
                return [c, degisken]
            }
            else if(data.length==0&&degisken!=undefined){
                return [c, degisken]
            }
            else{
                data.push(c)
            }
        }
        else if(filter.length==0){
            if(data.length==0){
                degisken=c
            }
            else if(data.length==1){
                return [data[0],c]
            }

        }
    }

}