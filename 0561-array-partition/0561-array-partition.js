/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    nums=nums.sort((a,b)=>a-b)
    console.log(nums,"nums")
    sum=0
    for(var i=0;i<nums.length;i=i+2){
        sum=sum+nums[i]
    }
    return sum
};