/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
    this.stream = [];
    this.matchingValue = value;
    this.size = k;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
    if (num !== this.matchingValue) {
        this.stream = [];
        return false;
    } else {
        this.stream.push(num);
        if (this.stream.length < this.size) {
            return false;
        }
        return true;
    }
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */