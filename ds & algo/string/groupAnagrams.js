// Problem: Group strings that are anagrams.
// Algorithm: Hash Map + Sorted Key

function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}
