var reverse = function (x) {
  let sign = Math.sign(x);
  let rev = 0;
  let Max = Math.pow(2, 31);
  x = Math.abs(x);

  while (x > 0) {
    let reminder = x % 10;
    x = (x - reminder) / 10;
    rev = rev * 10 + reminder;
  }

  return rev > Max ? 0 : rev * sign;
};
