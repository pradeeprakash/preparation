var reverse = function (list, target) {
  let prev = null;
  let current = list;
  let next = null;
  while (current && target !== 0) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    target--;
  }
  return [prev, next];
};

var reverseBetween = function (head, left, right) {
  if (!head?.next) return head;
  let current = head;
  let result = new ListNode("head", null);
  while (current) {
    if (left === 1) {
      [reverseList, current] = reverse(current, right);
      result.next = reverseList;
    }
    left--;
    right--;
    result.next = current;
    result = result.next;
    current = current.next;
  }

  return result.next;
};
function ListNode(val, next) {
  this.value = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
