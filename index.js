// function generateGrayCode(n) {
//   if (n === 0) return ["0"];
//   if (n === 1) return ["0", "1"];

//   // Generate Gray Code for n - 1
//   const previousGrayCode = generateGrayCode(n - 1);

//   // Prefix '0' to the original sequence
//   const withZeroPrefix = previousGrayCode.map((code) => "0" + code);

//   // Prefix '1' to the reflected sequence
//   const withOnePrefix = [...previousGrayCode]
//     .reverse()
//     .map((code) => "1" + code);

//   // Combine both
//   return [...withZeroPrefix, ...withOnePrefix];
// }

// // Example Usage
// const n = 4;
// const grayCode = generateGrayCode(n);
// console.log(grayCode); // Output: [ '00', '01', '11', '10' ]

// function minJumps(nums) {
//   if (nums.length <= 1) return 0;

//   let jumps = 0; // Number of jumps
//   let currentEnd = 0; // Current end of the range we can reach
//   let farthest = 0; // Farthest point we can reach so far

//   for (let i = 0; i < nums.length - 1; i++) {
//     farthest = Math.max(farthest, i + nums[i]); // Update the farthest point

//     // If we reach the end of the current range
//     if (i === currentEnd) {
//       jumps++;
//       currentEnd = farthest;

//       // If the farthest point reaches the end, break early
//       if (currentEnd >= nums.length - 1) {
//         break;
//       }
//     }
//   }

//   return jumps;
// }

// // Example Usage
// const nums = [6, 2, 4, 0, 5, 1, 1, 4, 2, 9];
// console.log(minJumps(nums)); // Output: 2

// [1, 3, 1, 2, 0, 5];

// console.log(longestPalindrome("ac"));

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0; // If endWord is not in the wordList

  const queue = [[beginWord, 1]]; // [currentWord, currentDepth]

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    // Check all possible one-letter transformations
    for (let i = 0; i < currentWord.length; i++) {
      for (let charCode = 97; charCode <= 122; charCode++) {
        // 'a' to 'z'
        const newChar = String.fromCharCode(charCode);
        const newWord =
          currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

        if (newWord === endWord) {
          return level + 1; // Found the shortest transformation
        }

        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord); // Remove to avoid revisiting
        }
      }
    }
  }

  return 0; // No valid transformation found
}

// Example Usage
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

// console.log(ladderLength(beginWord, endWord, wordList)); // Output: 5

// console.log(ladderLength("a", "c", ["a", "b", "c"])); // 2
// console.log(ladderLength("hot", "dog", ["hot", "dog"])); // 2

// var isMatch = function (s, p) {
//   let i = 0;
//   let j = 0;
//   let starIdx = -1;
//   let matchIdx = 0;

//   while (i < s.length) {
//     if (j < p.length && (s[i] === p[j] || p[j] === "?")) {
//       i++;
//       j++;
//     } else if (j < p.length && p[j] === "*") {
//       starIdx = j++;
//       matchIdx = i;
//     } else if (starIdx !== -1) {
//       j = starIdx + 1;
//       i = matchIdx + 1;
//       matchIdx = i;
//     } else {
//       return false;
//     }
//   }
//   while (j < p.length && p[j] === "*") j++;
//   return j === p.length;
// };

// console.log(isMatch("aaaax", "a*x"));
