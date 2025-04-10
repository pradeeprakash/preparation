function debounce(func, delay) {
  let timer; // Reference to the timer

  return function (...args) {
    // Clear any existing timer
    clearTimeout(timer);

    // Set a new timer
    timer = setTimeout(() => {
      func.apply(this, args); // Call the function after the delay
    }, delay);
  };
}
