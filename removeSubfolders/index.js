let removeSubfolders= function(folder){
    let obj= {};
    folder= folder.sort();
    for(let i= 0; i<folder.length; i++){
        let index= folder[i].lastIndexOf("/");
        let bool= false;
        while(index>0){
            if(obj[folder[i].slice(0,index)]!=undefined){
                bool= true;
                break;
            }
            index= folder[i].slice(0,index).lastIndexOf("/");
        }
        if(i==0){
            obj[folder[i]]= folder[i];
        }
        else if(!bool){
            obj[folder[i]]= folder[i];
        }
    }
    return Object.values(obj);
};