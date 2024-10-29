let maxArea= function(height){
    let max;
    let index;
    let maxArea;
    for(let i=0; i<height.length; i++){
        for(let k= height.length-1; k>i; k--){
            if(height[k]>= height[i]){
                if(maxArea==undefined){
                    maxArea= (k-i)*Math.min(height[i], height[k]);
                }
                else{
                    if(maxArea<(k-i)*Math.min(height[i], height[k])){
                        maxArea= (k-i)*Math.min(height[i], height[k]);
                    }
                }
                break;
            }
            else{
                if(maxArea==undefined){
                    maxArea= (k-i)*Math.min(height[i], height[k]);
                }
                else{
                    if(maxArea<(k-i)*Math.min(height[i], height[k])){
                        maxArea= (k-i)*Math.min(height[i], height[k]);
                    }
                }
            }            
        }                     
    }         
    return maxArea;       
};