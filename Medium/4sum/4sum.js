/**
 * Runtime: beats 93.35%
 * Memory: beats 63.9%
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let result = []
    //sort the nums array so that we always know the relative value of all 4 pointers... increasing left to right
    nums.sort((a,b) => a-b)
    //iterate only until nums.length-3 to give room for the 3 other pointers
    for(let i = 0;i<nums.length-3;i++) {
        //remove duplicate results by skipping duplicate i values
        if(nums[i]===nums[i-1]) {continue;}
        //start each iteration with first pointer 1 away from i, second pointer 1 away from first, and third pointer at the end
        let first = i+1
        let second = i+2
        let third = nums.length-1;
        //outer loop stops when for each i, every relevant combination of first,second,and third combinations have been tried. Essentially while(second< the last index because second will always be greater than first)
        while(second<third) {
            //The two while loops with the condition "second < third" serve as inner and outer loops for finding the distinct quadruplets that add up to the target value. The inner loop moves "second" and "third" towards each other until the correct sum is found or until "second" is no longer less than "third". The outer loop then moves "first" to the next value and resets "second" and "third" to the next two values. This allows for a more efficient search for the quadruplets by reducing the number of times the inner loop needs to be executed.
            while(second<third) {
                //store the sum in a sum variable
                let sum = nums[i]+nums[first]+nums[second]+nums[third]
            //if < target, we know incrementing second will increase sum
            if(sum<target) {
                second++
            }
            //if > target, we know decrementing third will decrease sum
            else if(sum>target) {
                third--
            }
            else {
                //push the array combination of values to result if sum = target
                result.push([nums[i],nums[first],nums[second],nums[third]])
                //account for duplicate solutions by incrementing or decrementning second and third respectively until they reach unique values
                while(nums[second]===nums[second+1]) {
                    second++
                }
                while(nums[third]===nums[third-1]) {
                    third--
                }
                second++
                third--
            }
            }
            //account for duplicate solutions by incremenitng first pointer until it reaches a unique value
            while(nums[first]===nums[first+1]) {
                first++
            }
            //in this outer while loop, we increment first, reset the value of second to be 1 more than second and reset third to the last index in the sorted nums array
            first++
            second=first+1
            third=nums.length-1
        }
        }
        return result;
};