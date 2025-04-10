import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement} data-testid="plus-btn">
        +
      </button>
      <button onClick={handleDecrement} data-testid="minus-btn">
        -
      </button>
    </div>
  );
}

export default Counter;


