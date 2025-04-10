function backspaceCompare(s1 = "", s2 = "") {
  return removeBackSpaceString(s1) == removeBackSpaceString(s2);
}

function removeBackSpaceString(str) {
  const length = str.length;
  let skip = 0;
  let j = 0;
  let result = "";
  for (i = length - 1; i >= 0; i--) {
    if (str[i] == "#") {
      skip++;
      j = i - 1;
      while (str[j] == "#") {
        skip++;
        j--;
      }
      i = j + 1 - skip;
    } else {
      result = str[i] + result;
    }
  }
  return result;
}

console.log(backspaceCompare("abrf##c", "abd#c"));

// var minStack = function () {};
function backspaceCompare(s, t) {
  function processString(str) {
    const result = [];

    for (const char of str) {
      if (char === "#") {
        result.pop(); // simulate backspace by removing the last character
      } else {
        result.push(char);
      }
    }

    return result.join("");
  }

  return processString(s) === processString(t);
}

// Example usage:
const s1 = "ab#c";
const t1 = "ad#c";
console.log(backspaceCompare(s1, t1)); // Output: true
