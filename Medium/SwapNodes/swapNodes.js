/**
 * 
 * Runtime: beats 84.36%
 * Memory: beats 46.60%
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function (head) {
    if(head==null) return null
    if(head.next==null) return head
    
    let newHead=head.next
    let curr=head
    let prev=null
    while(curr!=null && curr.next!=null){
        //using temp to keep track of the next.next node before swapping it
        let temp=curr.next.next
        //this essentially swaps the next two nodes by shifting the pointer of curr.next's next pointer to the current node
        curr.next.next=curr
        if(prev==null){
            prev=curr
        }
        else{
            prev.next=curr.next
            prev=curr
        }    
        
        curr.next=temp
        curr=curr.next
    }
    
    return newHead;
 }