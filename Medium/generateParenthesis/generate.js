/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = [];
    //helper function stores left as a counter for open parenthesis, right as a counter for closing parenthesis, and par as a string that builds a well-formed parenthesis pairing that is eventually pushed to the result array
    const gen = (left, right, par) => {
        //base case to exit recursive loop and push to result array
      if (left === n && right === n) {
        result.push(par);
        return;
      }
      //two if statements to create branching effect in recursive stack
      //left = the number of open parenthesis and right = number of closing parenthesis
      if (left < n) gen(left + 1, right, par+"(");
      //one this gen function has run its course and all call stacks to this point have been popped off, we go down to the 2nd if statement where a new call stack branch begins
      if (left > right && right < n) gen(left, right + 1, par+")");
    }
    //start the recursive loop
    gen(0, 0, '');
    
    return result;
  };