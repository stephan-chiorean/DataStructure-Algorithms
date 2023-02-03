/**
 * Runtime: beats 96.51%
 * Memory: beats 99.88%
 * 
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //max variable will keep track of the longest substring length
    let max = 0
    //start indicates the index of the current substring that we are evaluating
    let start = 0

    for(let i = 0;i<s.length;i++) {
        //as we iterate through string s, we iterate through each substring, from start to end where end<i
        for(let end = start;end<i;end++) {
            //as soon as the character at the end index in s matches the character at the i index in s, we cut the current iteration, readjusting the value of start to jump to the index after end. This ensures we won't duplicate our efforts unnecessarily.
            if(s[end]===s[i]) {
                start = end+1;
                break;
            }
        }
        //there are two scenarios. Either the entire string is full of unique characters, in which the end variable in the prior for loop will never product a s[end]===s[i], but the for loop will stop iterating at end = i-1. OR by the time s[end]===s[i], the value of start is reset before we can adjust max. The way to account for missing the final iteration in both scenarios most efficiently is to have a condition where we add 1 to (i-start) when comparing it to max in each iteration of the outer for loop.
        if(i-start+1>max) {
            max = i-start+1
        }
    }
    return max
};