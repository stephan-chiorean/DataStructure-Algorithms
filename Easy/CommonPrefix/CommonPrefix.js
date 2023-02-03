/**
 * Runtime: beats 69.35%
 * Memory: beats 30.25%
 * 
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    //extract the first string in the strs array. Use it as a reference point for the rest of the strings in the array
    let compare = strs[0]
    //initalize a result variable that we will iteratively add to and return at the end
    let result = ""
    //iterate first through each letter in compare. This way we ensure that we go letter by letter in each word in the array as opposed to word by word in the array and storing values in an accumulator variable which is unnecessarily complex
    for(let i=0;i<compare.length;i++) {
        for(let j = 1;j<strs.length;j++) {
            //as soon as we have a single discrepancy between a letter in a string in strs not corresponding to the compare string, we return the result
            if(strs[j][i]!==compare[i]) {return result}
        }
        //we only add to result when we've iterated through every word in strs and there are no discrepancies
        result+=compare[i]
    }
    //if there are no discrepancies, return the result
    return result;
};