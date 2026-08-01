/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {


    let sorted=[...score].sort((a,b)=>b-a)
     const map = new Map();
    for(var i=0;i<sorted.length;i++){
           map.set(sorted[i],(i+1)+"")
        if(i===0){
            map.set(sorted[i],"Gold Medal")
        }
        if(i===1){
            map.set(sorted[i],"Silver Medal")
        }
        if(i===2){
             map.set(sorted[i],"Bronze Medal")
        }
        
        
    }
    console.log(map)
    let ans=[]
    for(var i=0;i<score.length;i++){
        ans.push(map.get(score[i]))
    }
    return ans
    
};