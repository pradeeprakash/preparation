// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
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
var mergeTwoLists = function (list1, list2) {
  const result = new ListNode("head", null);
  let curr = result;

  while (list1 || list2) {
    if (list1 == null) {
      curr.next = list2;
      break;
    }

    if (list2 == null) {
      curr.next = list1;
      break;
    }

    if (list1?.val <= list2?.val) {
      curr.next = new ListNode(list1?.val, null);
      list1 = list1?.next;
    } else {
      curr.next = new ListNode(list2?.val, null);
      list2 = list2?.next;
    }
    curr = curr.next;
  }
  return result.next;
};
