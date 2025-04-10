const number = 18;

function isHappyNumber(num) {
  if (num) {
    let storeSet = new Set();
    let temp;
    let sum = 0;
    while (num !== 1) {
      while (num) {
        temp = num % 10;
        sum = sum + temp * temp;
        num = Math.floor(num / 10);
      }
      if (storeSet.has(sum)) {
        return false;
      }
      storeSet.add(sum);
      num = sum;
      sum = 0;
    }
    return true;
  }
  return false;
}

console.log(isHappyNumber(number));
