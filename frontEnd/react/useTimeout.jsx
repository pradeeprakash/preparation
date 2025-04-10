import { useState, useEffect } from "react";
function useTimeout(callback, delay) {
  const [timerId, setTimerId] = useState(null);
  useEffect(() => {
    if (timerId) {
      clearTimeout(timerId);
    }

    if (callback && delay !== null) {
      setTimerId(setTimeout(callback, delay));
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [callback, delay]);
  return timerId;
}

import { useState } from "react";
import useTimeout from "./useTimeout";
function Example() {
  const [count, setCount] = useState(0);
  const handleTimer = () => {
    setCount(count + 1);
  };
  useTimeout(handleTimer, 1000);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
}
