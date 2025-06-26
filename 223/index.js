let computeArea= function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2){
    let diffX= 0;
    let diffY= 0;
    if(ax1<=bx1){
        if(ax2<=bx2){
            diffX= ax2-bx1<=0 ? 0 : ax2-bx1;
        }
        else{
            diffX= bx2-bx1<=0 ? 0 : bx2-bx1;
        }        
    }      
    else{
        if(ax2<=bx2){
            diffX= ax2-ax1<=0 ? 0 : ax2-ax1;
        }
        else{
            diffX= bx2-ax1<=0 ? 0 : bx2-ax1;
        }
    }
    if(ay1<=by1){
        if(ay2<=by2){
            diffY= ay2-by1<=0 ? 0 : ay2-by1;
        }
        else{
            diffY= by2-by1<=0 ? 0 : by2-by1;
        }        
    }
    else{
        if(ay2<=by2){
            diffY= ay2-ay1<=0 ? 0 : ay2-ay1;
        }
        else{
            diffY= by2-ay1<=0 ? 0 : by2-ay1;
        }
    }
    return ((Math.abs(ax2-ax1)*Math.abs(ay2-ay1))+(Math.abs(bx2-bx1)*Math.abs(by2-by1))-(diffX*diffY)); 
};