let countDays= function(days, meetings){
    meetings= meetings.sort((a,b)=>{
        if(a[0]>b[0]){
            return 1;
        }
        else if(a[0]<b[0]){
            return -1;
        }
        else{
            return a[1]-b[1];
        }        
    });
    
    let left= 0;
    let right= 0;
    let count= 0;
    for(let i= 0; i<meetings.length; i++){     
        if(i==0){
            if(meetings[i][0]>1){
                left= meetings[i][0];
                right= meetings[i][1];
            }
            else{
                left=  1;
                right= meetings[i][1];
            }            
        }
        else{
            if(meetings[i][0]-right-1>0){
                count+= meetings[i][0]-right-1;
                if(right<meetings[i][1]){
                    right= meetings[i][1];
                }
            }
            else{
                if(right<meetings[i][1]){
                    right= meetings[i][1];
                }
            }
        }
    }
    return (left-1)+(days-right)+count;
};