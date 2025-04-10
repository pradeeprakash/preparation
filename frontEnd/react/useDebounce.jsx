import { useState, useEffect } from "react";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState < T > value;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Cancel the timeout if value or delay changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);
  return debouncedValue;
}
function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}
