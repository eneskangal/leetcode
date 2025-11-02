let maxLevelSum= function(root){
    let results= [[]];
    function reverse(root, level){
        if(results[level]==undefined){
            results[level]= [root.val];
        }
        else{
            results[level].push(root.val);
        }
        if(root.left!=null){
            if(root.right!=null){
                reverse(root.left, level+1);
                reverse(root.right, level+1);
            }
            else{
                reverse(root.left, level+1);
            }
        } 
        else if(root.right!=null){
            reverse(root.right, level+1);
        }  
    }

    if(root.left!=null){
        results[0].push(root.val);
        if(root.right!=null){
            reverse(root.left, 1);
            reverse(root.right, 1);
        }
        else{
            reverse(root.left, 1);
        }
    } 
    else if(root.right!=null){
        results[0].push(root.val);
        reverse(root.right, 1);
    }  
    else{
        results[0].push(root.val);
    }    

    let max;
    let level;

    for(let i= 0; i<results.length; i++){
        let subMax= 0;
        for(let k= 0; k<results[i].length; k++){
            subMax+= results[i][k];        
        }        

        if(max==undefined){
            max= subMax;
            level= i+1;
        }
        else if(max<subMax){
            max= subMax;
            level= i+1;            
        }
    }

    return level;
};