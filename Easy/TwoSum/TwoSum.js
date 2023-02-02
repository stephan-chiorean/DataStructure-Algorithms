/**
 * RunTime: beats 98.29%
 * Memory: beats 39.65%
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



 var twoSum = function(nums, target) {
    const obj = {}
    //create an object to store values from the array and corresponding indexes
    for(let i = 0;i<nums.length;i++) {
    //iterate through nums array. if the difference between target and the current value is an existing property in the object, then obviously the current value and that existing value add up to our target value. We then extract the value associated with that existing property (which is its index in the nums array) as well as the current index and return the array of those index values. Since there is exactly one solution, we don't need to worry about additional iterations and we can apply a single return statement. 
        if(obj[target-nums[i]]!==undefined) {
            return [obj[target-nums[i]],i]
            
        }
        else {
            obj[nums[i]] = i
            //if there is no match in the existing object, store the current value and its corresponding index in the obj
        }
    }
};