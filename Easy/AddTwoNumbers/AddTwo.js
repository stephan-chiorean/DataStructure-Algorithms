/**
 * Runtime: beats 97.45%
 * Memory: beats 78.8%
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    //initialize carry as a variable that will indicate if the sum of two nodes has exceeded 10 and we need to add 1 to the proximate node value pair
    let carry = 0;
    //initalize our result node
    let resultNode = new ListNode();
    //initalize a head for our result node so that we don't lose track of our starting reference point. At the end we will be returning head.next as it will correspond to the first sum node in our result (head is empty)
    let head = resultNode;
    //while l1 or l2 exists, we continue iterating
    while (l1 || l2) {
        //if l1 or l2 are null, we convert their value to 0 so that we can perform mathematical operations
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        //regardless of whether the sum is more or less than 10, sum%10 will provide us with the correct digit
        resultNode.next = new ListNode(sum%10);
        //carry value is updated to either 1 or 0
        carry = sum >= 10 ? 1 : 0;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        resultNode = resultNode.next;
    }
    //in the last iteration it is possible that there is a leftover carry value that isn't accounted for in the while loop. This if statement addresses that, adding a node to our result node with the corresponding value of 1. 
    if (carry === 1) {
        resultNode.next = new ListNode(1);
    }
    //Again we return head.next as this is the first non-empty node. Head was only created to keep track of the start
    return head.next;
};