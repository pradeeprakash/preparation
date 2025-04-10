// Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

/**
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode("dummy", null);
  let dummy = result;
  let reminder = 0;
  let tempSum = 0;
  let l1Val = 0;
  let l2Val = 0;
  while (l1 || l2 || reminder) {
    l1Val = l1?.val ? l1.val : 0;
    l2Val = l2?.val ? l2?.val : 0;
    tempSum = l1Val + l2Val + reminder;
    reminder = Math.floor(tempSum / 10);
    tempSum = tempSum % 10;
    dummy.next = new ListNode(tempSum, null);
    l1 = l1?.next;
    l2 = l2?.next;
    dummy = dummy.next;
  }

  return result.next;
};
