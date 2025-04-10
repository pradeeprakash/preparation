/**
 * https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length > t.length) return false;
  let map = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {
    //e d
    if (map[s[i]]) {
      if (map[s[i]] !== t[i]) {
        return false;
      }
    } else {
      if (tMap[t[i]]) {
        return false;
      }
      map[s[i]] = t[i];
      tMap[t[i]] = s[i];
    }
  }
  return true;
};
