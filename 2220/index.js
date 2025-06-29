/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
let minBitFlips= function(start, goal){
    let stringStart= start.toString(2);
    let stringGoal= goal.toString(2);
    let flips= 0;

    if(stringStart.length>= stringGoal.length){
        stringGoal= stringGoal.padStart(stringStart.length, "0");
        for(let i=0; i<stringStart.length; i++){
            if(stringStart[i]!= stringGoal[i]){
                flips+= 1;
            }
        }
    }
    else{
        stringStart= stringStart.padStart(stringGoal.length, "0");
        for(let i=0; i<stringGoal.length; i++){
            if(stringStart[i]!= stringGoal[i]){
                flips+= 1;
            }
        }
    }
    return flips;
};