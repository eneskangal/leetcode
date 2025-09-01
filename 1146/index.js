class SnapshotArray{
    constructor(length) {
        this.elements= Array(length).fill(null).map(el => []);
        this.snapId= 0;
    }
    set(index, val){
        this.elements[index].push([val, this.snapId]);
    }
    snap(){
        ++this.snapId;
        return this.snapId - 1;
    }
    get(index, snap_id){
        const element= this.elements[index];
        let left= 0,
            right= element.length - 1,
            mid, id= -1;
        
        while(left <= right){
            mid= left + Math.floor((right - left) / 2);
            if(element[mid][1]<= snap_id){
                id= mid;
                left= mid + 1;
            } 
            else{
                right= mid - 1;
            }
        }
        return id===-1 ? 0 : element[id][0];
    }
}