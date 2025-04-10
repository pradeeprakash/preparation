/**
 * Definition for singly-linked list.
 * https://leetcode.com/problems/insertion-sort-list/description/

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var insertionSortList = function (head) {
  //  [ 4,2,1,3]
  let dummy = new ListNode(0, head); // [0, 4,2,1,3]
  let prev = head; //  [ 4,2,1,3]
  let curr = head.next; //  [2,1,3]

  while (curr.next) {
    if (curr.value >= prev.value) {
      curr = curr.next;
      prev = prev.next;
      continue;
    }

    let temp = dummy; // [0,4,2,1,3]
    while (curr.value > temp.next.value) {
      // 2 > 4
      temp = temp.next;
    }

    prev = curr.next; // [ 4 ] => [2,1,3]
    temp.next = prev; // [4] =>  [4,1,3]
    curr.next = temp; // [2]. => [2,4,1,3]
    curr = dummy.next;
  }

  return dummy.next;
};

let input = new ListNode(4, null);
input.next = new ListNode(2, null);
input.next.next = new ListNode(1, null);
input.next.next.next = new ListNode(3, null);

const output = insertionSortList(input);
console.log(output);
