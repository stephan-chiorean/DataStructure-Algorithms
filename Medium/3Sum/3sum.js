/**
 * Runtime: beats 57.45%
 * Memory: beats 47.49%
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    //sort the nums array
    nums.sort((a,b) => a-b)
    //initalize result array that we iteratively push to before returning result at the end
    const result = [];
    //we will have 3 pointers: i,left,and right. i will be first followed by left which will start at i+1, and right which will always start at the end of nums array. Because nums is sorted, we know that nums[i]<nums[left]<nums[right]. We iterate through nums.length-2 because in the final iteration, left and right will acount for those final 2 indexes.
    for(let i = 0;i<nums.length-2;i++) {
        //this if statement accounts for duplicate solutions. if nums[i]===nums[i-1], this iteration will provide a duplicate result so we skip to the next iteration until this isn't true
        if(nums[i]===nums[i-1]) {continue;}
        let left = i+1
        let right = nums.length-1
        //we will be incrementing left and decrementing right in each iteration of this while loop until they overlap
        while(left<right) {
            //in each iteration, gather the sum of the values of each of the 3 pointers. Increment left or decrement right according to the value of sum. 
            let sum = nums[i]+nums[left]+nums[right]
            //if sum is less than 0, because nums is sorted, we know that incrementing left will increase the next sum and allow us to approach closer to 0. Vice versa for the right index.
            if(sum<0) {
                left++
            }
            else if(sum>0) {
                right--
            }
            else {
                //if the sum of all 3 pointer values = 0, push the array of those values to result
                result.push([nums[i],nums[left],nums[right]])
                //in order to prevent duplicate solutions, we need to additionally increment left and/or decrement right until both reach unique values. After these while loops, nums[left] and nums[right] will still have the same value as they did in the previous solution, but left and right will be incremented and decremented one more time below
                while(nums[left]===nums[left+1]) {
                    left++
                }
                while(nums[right]===nums[right-1]) {
                    right--
                }
                //left and right incremented and decremented each time there is a solution. Only one combination of left and right values corresponds to a solution for each value of i
                left++
                right--
            }
        }

    }
    return result;
};