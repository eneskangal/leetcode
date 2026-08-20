let FindSumPairs= function(nums1, nums2){
    this.nums1= nums1;
    this.nums2= nums2;  
    this.hash= {};

    for(let i= 0; i<this.nums2.length; i++){
        if(this.hash[nums2[i]]==undefined){
            this.hash[nums2[i]]= 1;
        }
        else{
            this.hash[nums2[i]]++;
        }
    }  
};

FindSumPairs.prototype.add= function(index, val){  
    if(this.hash[this.nums2[index]+val]==undefined){
        if(this.hash[this.nums2[index]]==1){
            delete this.hash[this.nums2[index]];
        }
        else{
            this.hash[this.nums2[index]]--;
        }
        this.nums2[index]+= val;  
        this.hash[this.nums2[index]]= 1;          
    }
    else{
        if(this.hash[this.nums2[index]]==1){
            delete this.hash[this.nums2[index]];
        }
        else{
            this.hash[this.nums2[index]]--;
        }
        this.nums2[index]+= val;  
        this.hash[this.nums2[index]]+= 1;          
    }
};

FindSumPairs.prototype.count= function(tot){
    let count= 0;
    for(let i= 0; i<this.nums1.length; i++){
        if(this.hash[tot-this.nums1[i]]!=undefined){
            count+= this.hash[tot-this.nums1[i]];  
        }
    }
    return count;
};
