/**
 * Runtime: beats 99.65%
 * Memory: beats 42.54%
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    //create a new List where we will be adding every node from head except the node that we will be "removing" and add a newHead pointer to keep track of the beginning of this merge list
    let merge = new ListNode()
    let newHead = merge;
    //create a helper function that checks whether the node passed in is the node we are removing
    function check(node,number) {
        //if number has reached 0, the passed in node is not the node we want to remove. We can return anything as long as it's not undefined
        if(number===0) {
            return node
        }
        //if node.next ever reaches null, it means that the node originally passed into the helper function is the node we want to remove
        if(node.next===null) {return undefined}
        //in each recursive iteration, we decrement number by 1 and move to node.next... if n=2 initially, the 2nd node from the end will satisfy the node.next===null condition before number reaches 0
        else return check(node.next,number-1)
    }
    //this is how we iterate through the original linked list
    while(head) {
        //if passing in the current node and n into the helper check function returns any result other than undefined, then this current node is NOT the node we want to remove and we add it to merge
        if(check(head,n)!==undefined) {
            merge.next = head
        }
        else {
            //if the helper check function has returned an undefined value, we skip this current node and merge adds the head.next node instead. We also know that this is the only node that will be skipped, and we have linked merge to the rest of the head list. We can now return newHead.next without going any further
            merge.next = head.next
            return newHead.next
        }
        //iterate through both head and merge by moving to the next node
        head = head.next
        merge = merge.next
    }
  };