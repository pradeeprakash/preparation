function findRepeatedDnaSequences(s) {
  let length = s.length;
  let set = new Set();
  let result = new Set();
  for (i = 0; i < length - 10; i++) {
    let substr = s.substring(i, i + 10);
    if (set.has(substr)) {
      result.add(substr);
    } else {
      set.add(substr);
    }
  }
  return result;
}
const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";

console.log(findRepeatedDnaSequences(s));
