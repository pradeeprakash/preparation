import { useState, useEffect, useRef } from "react";
function useFocus() {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.addEventListener("focus", handleFocus);
      element.addEventListener("blur", handleBlur);
      return () => {
        element.removeEventListener("focus", handleFocus);
        element.removeEventListener("blur", handleBlur);
      };
    }
  }, [ref]);
  return [ref, isFocused];
}
function App() {
  const [ref, isFocused] = useFocus();
  return (
    <div>
      <input ref={ref} />
      {isFocused && <p>focused</p>}
    </div>
  );
}

