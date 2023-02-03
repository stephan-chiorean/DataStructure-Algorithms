/**
 * Runtime: beats 86.80%
 * Memory: beats 92.68%
 * 
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //initialize a stack variable to store characters as we iterate through the string. The stack will account for the nested nature of each parenthesis, brakcet, or curly bracket pair. 
    const stack = []
    if(s.length<2) {return false}
    //initialize an object that stores valid parenthesis or bracket pairing as key-value pairs. 
    const par = {'(':')', '{':'}', '[':']'}
    for(let i = 0;i<s.length;i++) {
        //if the character is an open parenthesis or bracket, it will exist as a property in the par object. Push it to the stack
        if(par[s[i]]!==undefined) {
            stack.push(s[i])
        }
        else {
            //if the character is a closing parenthesis or bracket, the last element of stack should be the corresponding open parenthesis or bracket
            if(par[stack.pop()]!==s[i]) {return false}
        }
    }
    //if at the end of the for loop iteration, stack is not emptied out, it means that the number of open parenthesis or brackets outnumbered the number of corresponding closing parenthesis, and thus the string is invalid. 
    if(stack.length===0) {return true}
    else {return false}
};