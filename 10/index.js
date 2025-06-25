let isMatch= function(s, p){
    if(p.indexOf("*")==-1&&p.indexOf(".")==-1){
        return s.match(p)==s;
    }
    let newP;
    for(let i= 0; i<p.length; i++){
        if(p[i]=="*"&&p[i+1]!="*"){
            newP+= p[i];
        }
        else if(i==0){
            newP= p[i];
        }
        else if(p[i]!="*"){
            newP+= p[i];
        }
    }
    return s.match(newP)==s;
};