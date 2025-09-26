let sumEvenGrandparent= function(root, arrayList= [], sum= 0){
    if(root==null){
        return sum;
    } 
    if(root.val%2==0){
        if(arrayList[0]==2){
            sum+= root.val;
            arrayList.shift();            
        }
        if(arrayList[0]==undefined){
            sum+= sumEvenGrandparent(root.left, [...arrayList, 1]);
            sum+= sumEvenGrandparent(root.right, [...arrayList, 1]);
        }
        else{
            if(arrayList[1]==undefined){
                arrayList[0]++;
                sum+= sumEvenGrandparent(root.left, [...arrayList, 1]);
                sum+= sumEvenGrandparent(root.right, [...arrayList, 1]);                
            }
            else if(arrayList[2]==undefined){
                arrayList[0]++;
                arrayList[1]++;
                sum+= sumEvenGrandparent(root.left, [...arrayList, 1]);
                sum+= sumEvenGrandparent(root.right, [...arrayList, 1]);                   
            }
            else{                
                arrayList[1]++;
                arrayList[2]++;
                sum+= root.val;
                arrayList.shift();
                sum+= sumEvenGrandparent(root.left, [...arrayList, 1]);
                sum+= sumEvenGrandparent(root.right, [...arrayList, 1]);                   
            }
        }
    }  
    else{
        if(arrayList[0]==2){
            sum+= root.val;
            arrayList.shift();            
        }
        if(arrayList[0]==undefined){
            sum+= sumEvenGrandparent(root.left, [...arrayList]);
            sum+= sumEvenGrandparent(root.right, [...arrayList]);
        }
        else{
            if(arrayList[1]==undefined){
                arrayList[0]++;
                sum+= sumEvenGrandparent(root.left, [...arrayList]);
                sum+= sumEvenGrandparent(root.right, [...arrayList]);                
            }
            else if(arrayList[2]==undefined){
                arrayList[0]++;
                arrayList[1]++;
                sum+= sumEvenGrandparent(root.left, [...arrayList]);
                sum+= sumEvenGrandparent(root.right, [...arrayList]);                   
            }
            else{
                arrayList[0]++;
                arrayList[1]++;
                sum+= root.val;
                arrayList.shift();
                sum+= sumEvenGrandparent(root.left, [...arrayList]);
                sum+= sumEvenGrandparent(root.right, [...arrayList]);                   
            }
        }
    }  
    return sum;
};