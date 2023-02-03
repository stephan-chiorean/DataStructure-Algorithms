/**
 * Runtime: beats 77.85%
 * Memory: beats 96.29%
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    //initialize a new merge list that we will be adding to as we iterate through the other two
    let merge = new ListNode()
    //initalize a head to keep track of the start of the merge list so that we can return it at the end. (we'll be returning head.next as it will be the first merged node)
    let head = merge
    //while list1 and list2 both exist we decide which node to merge first. If either is undefined, we simply point to the next node in the opposite list and it will link the merged list to the remainder of that list
    while(list1 && list2) {
        //compare the values. only iterate though list1 or list2 if we have merged that node already
        if(list1.val<list2.val) {
            merge.next = list1
            list1 = list1.next
        }
        else {
            merge.next = list2
            list2 = list2.next
        }
        //build merge by moving merge to the merge.next node you have added
        merge = merge.next
    }
    //check if either of the lists has nodes left over and link merge.next to point to the remainder of that list
    if(!list1 && list2) {
        merge.next = list2
    }
    else if (!list2 && list1) {
        merge.next = list1
    }
    //return head.next which is the first node of value in merge
    return head.next
};