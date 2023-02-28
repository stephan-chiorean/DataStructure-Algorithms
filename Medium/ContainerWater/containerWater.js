/**
 * 
 * Runtime: beats 98.21%
 * Memory: beats 90.70%
 * 
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max = 0
    let i = 0
    let j = height.length-1
    while(i<j) {
        //calculate the area of the rectangle formed by the product of the width (j-i) and the height (either height[i] or height[j] whichever is smaller)
        max = Math.max(max,(Math.min(height[i],height[j])*(j-i)))
        //increment either j or i by keeping the maximum value
        if(height[j]>height[i]) {
            i++
        }
        else {
            j--
        }
    }
    return max;
};