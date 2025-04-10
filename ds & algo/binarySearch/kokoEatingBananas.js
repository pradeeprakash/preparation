// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4

function minEatingSpeed(piles, h) {
  let left = 1,
    right = Math.max(...piles);
  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
