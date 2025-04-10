var count = (function () {
  let val = 0;
  function inner() {
    val++;
    console.log(val);
  }

  inner.reset = function () {
    val = 0;
  };

  return inner;
})();

count(); // 1;
count(); // 2;
count(); // 3;

count.reset();
count(); // 1;
