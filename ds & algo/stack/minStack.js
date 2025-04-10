class MinStack {
  value = [];
  minStackValue = [];

  push = function (val) {
    this.value.push(val);
    let min = Infinity;
    if (this.minStackValue.length) {
      min = this.minStackValue[this.minStackValue.length - 1];
    }
    this.minStackValue.push(Math.min(val, min));
  };

  pop = function () {
    this.value.pop();
    this.minStackValue.pop();
  };

  top = function () {
    console.log(this.value, this.minStackValue);
    console.log(this.value[this.value.length - 1]);
  };

  getMinStack = function () {
    console.log(this.minStackValue[this.minStackValue.length - 1]);
  };
}

const minO = new MinStack();

minO.push(1);
minO.push(2);
minO.push(3);
minO.push(2);
minO.pop();
minO.push(0);
minO.pop();
minO.push(5);

minO.top();
minO.getMinStack();
