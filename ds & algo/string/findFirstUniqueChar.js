function findFirstUnique(str) {
  let uniqueChar = new Map();
  let s;
  const length = str.length;

  if (length == 0 || length == 1) {
    return str;
  }

  for (let i = 0; i < length; i++) {
    if (uniqueChar.get(str[i])) {
      uniqueChar.set(str[i], uniqueChar.get(str[i]) + 1);
    } else {
      uniqueChar.set(str[i], 1);
    }
  }
  let i = 0;
  for (let x of uniqueChar.keys()) {
    if (uniqueChar.get(x) == 1) {
      s = x;
      break;
    }
  }
  return s;
}

console.log(findFirstUnique("leetcodeltc"));
