let compareVersion= function(version1, version2) {
    let splitV1= version1.split(".");
    let splitV2= version2.split(".");
    if(splitV1.length==splitV2.length){
        for(let i= 0; i<splitV1.length; i++){
            if(splitV1[i]*1<splitV2[i]*1){
                return -1;
            }
            else if(splitV1[i]*1>splitV2[i]*1){
                return 1;
            }
        }
        return 0;
    }
    else if(splitV1.length>splitV2.length){
        for(let i= 0; i<splitV1.length; i++){
            if(splitV2[i]==undefined){
                if(splitV1[i]*1<0){
                    return -1;
                }
                else if(splitV1[i]*1>0){
                    return 1;
                }
            }
            if(splitV2[i]!=undefined){
                if(splitV1[i]*1<splitV2[i]*1){
                    return -1;
                }
                else if(splitV1[i]*1>splitV2[i]*1){
                    return 1;
                }
            }            
        }
        return 0;
    }
    else if(splitV1.length<splitV2.length){
        for(let i= 0; i<splitV2.length; i++){
            if(splitV1[i]==undefined){
                if(splitV2[i]*1>0){
                    return -1;
                }                
            }
            if(splitV1[i]!=undefined){
                if(splitV1[i]*1<splitV2[i]*1){
                    return -1;
                }
                else if(splitV1[i]*1>splitV2[i]*1){
                    return 1;
                }
            }            
        }
        return 0;
    }
};